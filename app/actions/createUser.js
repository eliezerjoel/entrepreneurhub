"use server";
import { createAdminClient } from "../../config/appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";

async function createUser(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  if (!email || !name || !password) {
    return {
      error: "Please fill in all fields",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 characters long",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }

  const { databases } = await createAdminClient();
  const { account } = await createAdminClient();
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);

    if (!newAccount) throw Error;

    // Signing am in immediately

    //  Generate session
    const session = await account.createEmailPasswordSession(email, password);


    // Create cookie
    cookies().set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    const newUser = await databases.createDocument(
      "VenturesDB",
      "usersColl",
      ID.unique(),
      {
        accountId: newAccount.$id,
        username: name,
        email: email,
      }
    );
    console.log(newUser, "Is brand new user");
    return { success: true };
  } catch (error) {
    console.log("Registration error: ", error);
    return { error: "Could not register user" };
  }
}
export default createUser;

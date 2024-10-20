"use server";
import { createSessionClient } from "../../config/appwrite";
import { cookies } from "next/headers";

async function checkAuth() {
  // console.log("Testing checkAuth()");
  const sessionCookie = cookies().get("appwrite-session");
  
  // console.log("Testing checkAuth()", sessionCookie);

  if (!sessionCookie) {
    // console.log("Tekaliko baaba");
    return {
      isAuthenticated: false,
    };
  } else {
    // console.log("Kwekali baaba");
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const user = await account.get();

    // console.log("Testing account.get()");
    // console.log(user);
    // console.log("Testing account.get()");
    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.log("Error in checkAuth: ", error);
    return {
      isAuthenticated: false,
    };
  }
}

export default checkAuth;

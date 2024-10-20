'use server'
import { createAdminClient } from "../../config/appwrite";
import { ID } from "node-appwrite";

export async function completeProfile(previousState, formData){
    console.log("prof comp called")
    const regNo = formData.get("regNo")
    const passion = formData.get("passions");
    const phone = formData.get("phone");
    console.log(formData)

    // console.log(regNo, passions)
     if (!regNo || !passion || !phone) {
       return {
         error: "Please fill in all fields",
       };
     }


    const passions = passion.split(",").map((passion) => passion.trim());

  const { databases } = await createAdminClient();

  try {
    const newProfile = await databases.createDocument(
      "VenturesDB",
      "usersColl",
      ID.unique(),
      { regNo, passions, phone }
    );
    console.log(newProfile);
    return { success: true };
  } catch (error) {
    console.log("Error completing profile: ", error);
    return { error: "Failed to complete profile" };
  }

}
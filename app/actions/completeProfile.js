"use server";
import { createAdminClient } from "../../config/appwrite";
import { ID } from "node-appwrite";
import { Query } from "node-appwrite";
import checkAuth from "./checkAuth";
export async function completeProfile(previousState, formData) {
  console.log("Profile completion called");

  const { databases } = await createAdminClient();
  const {user} = await checkAuth();
  console.log("User in completeProfile", user);
  if (!user || !user.id) {
    throw new Error(
      "User ID is missing. Ensure the user is authenticated and has a valid ID."
    );
  }

  const currentUser = await databases.listDocuments("VenturesDB", "usersColl", [
    Query.equal("accountId", user.id),
  ]);
  const currentUserId = currentUser.documents[0].$id

  const regNo = formData.get("regNo");
  const passion = formData.get("passions");
  const phone = formData.get("phone");
  const orgName = formData.get("orgName");;
  console.log(formData);

  if (!regNo || !passion || !phone) {
    return {
      error: "Please fill in all fields",
    };
  }

  const passions = passion.split(",").map((passion) => passion.trim());

  try {
    const newOrganisation = await databases.createDocument(
      "VenturesDB",
      "organisationsColl",
      ID.unique(),
      { name: orgName, members: [currentUserId] }
    );
    const organisation = newOrganisation.$id;
    const updatedProfile = await databases.updateDocument(
      "VenturesDB",
      "usersColl",
      currentUserId,
      { regNo, passions, phone, organisation }
    );

    console.log(updatedProfile);
    return { success: true };
  } catch (error) {
    console.log("Error updating profile: ", error);
    return { error: "Failed to update profile" };
  }
}

// export async function completeProfile(previousState, formData){
//     console.log("prof comp called")
//     const regNo = formData.get("regNo")
//     const passion = formData.get("passions");
//     const phone = formData.get("phone");
//     console.log(formData)

//     // console.log(regNo, passions)
//      if (!regNo || !passion || !phone) {
//        return {
//          error: "Please fill in all fields",
//        };
//      }

//     const passions = passion.split(",").map((passion) => passion.trim());

//   const { databases } = await createAdminClient();

//   try {
//     const newProfile = await databases.u
//     (
//       "VenturesDB",
//       "usersColl",
//       ID.unique(),
//       { regNo, passions, phone }
//     );
//     console.log(newProfile);
//     return { success: true };
//   } catch (error) {
//     console.log("Error completing profile: ", error);
//     return { error: "Failed to complete profile" };
//   }

// }

"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../../config/appwrite";
import { revalidatePath } from "next/cache";
import checkAuth from "./checkAuth";

export default async function createVenture(previousState, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const writeUp = formData.get("writeUp");
  const image = formData.get("image");
  // console.log("Hi from the action");

  // console.log(name, description, writeUp);

  const { databases, storage } = await createAdminClient();
  const { user } = await checkAuth();
  console.log("User in create venture", user);
  if (!user || !user.id) {
    throw new Error(
      "User ID is missing. Ensure the user is authenticated and has a valid ID."
    );
  }

  const currentUser = await databases.listDocuments("VenturesDB", "usersColl", [
    Query.equal("accountId", user.id),
  ]);
  const currentUserId = currentUser.documents[0].$id;
  const userPhone = currentUser.documents[0].phone;
  const userOrganisation = currentUser.documents[0].organisation;

  console.log("Tuli wano baaba", currentUserId, userPhone, userOrganisation);
  let imageID;

  if (image && image.size > 0 && image.name !== "undefined") {
  
    try{
      const response = await storage.createFile(
      'venturesStorage', ID.unique(), image)
      imageID = response.$id;
      console.log('Image uploaded successfully:', response.$id);
    }catch(error){
      console.log("Error uploading image", error);
      return {error: "Failed to upload image"};
    }
  } else {
    return {error: "Please upload a image"};
  }

  try{

  const newVenture = await databases.createDocument(
    "VenturesDB",
    "venturesColl",
    ID.unique(),
    { name, description, writeUp, image: imageID, creator: userOrganisation }
  );
  console.log(newVenture)
  revalidatePath("/", "layout");
  return {success: true};
  } catch (error) {
    console.log("Error creating venture", error);
    return {error: "Failed to create venture"};
  }
}

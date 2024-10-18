"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../../config/appwrite";
import { revalidatePath } from "next/cache";

export default async function createVenture(previousState, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const writeUp = formData.get("writeUp");
  const image = formData.get("image");
  console.log("Hi from the action");

  // console.log(name, description, writeUp);

  const { databases, storage } = await createAdminClient();

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
    {name, description, writeUp, image: imageID}

  );
  console.log(newVenture)
  revalidatePath("/", "layout");
  return {success: true};
  } catch (error) {
    console.log("Error creating venture", error);
    return {error: "Failed to create venture"};
  }
}

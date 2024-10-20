'use server'
import { createAdminClient } from "../../config/appwrite";
import { ID } from "node-appwrite";

export async function createOrganisation(previousState, formData) {
  console.log("prof comp called");
  const name = formData.get("name");
  const member = formData.get("member");
  console.log(formData);

  if (!name) {
    return {
      error: "Please fill in all fields",
    };
  }

  const members = member.split(",").map((passion) => passion.trim());

  const { databases } = await createAdminClient();

  try {
    const newOrganisation = await databases.createDocument(
      "VenturesDB",
      "organisationsColl",
      ID.unique(),
      { name, members }
    );
    console.log(newOrganisation);
    return { success: true };
  } catch (error) {
    console.log("Error creating Organisation: ", error);
    return { error: "Failed to creating Organisation" };
  }
}
import { createAdminClient } from "../../config/appwrite";
import { ID, Query } from "node-appwrite";

async function getOneVenture(id) {
  try {
    const { databases } = await createAdminClient();

    // Fetch the venture document
    const venture = await databases.getDocument(
      "VenturesDB",
      "venturesColl",
      id
    );
    console.log("Venture object:", venture);

    const organisationId = venture.creator; // Access creator directly

    if (organisationId) {
      try {
        // Query organisationsColl for the organisation document
        console.log("Organisation ID found:", organisationId);
        const orgResponse = await databases.listDocuments(
          "VenturesDB",
          "organisationsColl",
          [Query.equal("$id", organisationId)] // Query using the organisation ID
        );

        if (orgResponse.total === 0) {
          console.error("Organization not found");
          return { venture, phoneNumber: null, organisationName: null };
        }

        const organisation = orgResponse.documents[0];
        const organisationName = organisation.name; // Get organization name
        const memberIds = organisation.members;

        if (!memberIds || memberIds.length === 0) {
          console.error("No members found in the organization");
          return { venture, phoneNumber: null, organisationName };
        }

        // Get the phone number of the first member in the organisation (or modify to fit your use case)
        const userId = memberIds[0];
        const userResponse = await databases.listDocuments(
          "VenturesDB",
          "usersColl",
          [Query.equal("$id", userId)]
        );

        if (userResponse.total === 0) {
          console.error("User not found");
          return { venture, phoneNumber: null, organisationName };
        }

        const phoneNumber = userResponse.documents[0].phone;

        return { venture, phoneNumber, organisationName };
      } catch (error) {
        console.error("Failed to get organisation or user data:", error);
        return { venture, phoneNumber: null, organisationName: null };
      }
    } else {
      console.error("Creator not found on venture");
      return { venture, phoneNumber: null, organisationName: null };
    }
  } catch (error) {
    console.error("Failed to get venture:", error);
    return null; // Return null if there's an error fetching the venture
  }
}

export default getOneVenture;

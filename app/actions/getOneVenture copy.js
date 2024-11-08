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

    const organisationId = venture.creator; // Access the creator directly

    if (organisationId) {
      try {
        // Query organisationsColl for the organisation document
        console.log("Organisation ID found:", organisationId);
        const orgResponse = await databases.listDocuments(
          "VenturesDB",
          "organisationsColl",
          [Query.equal("$id", organisationId)] // Query using the organization ID
        );

        if (orgResponse.total === 0) {
          console.error("Organization not found");
          return { venture, phoneNumber: null };
        }

        const organisation = orgResponse.documents[0];
        const memberIds = organisation.members;

        if (!memberIds || memberIds.length === 0) {
          console.error("No members found in the organization");
          return { venture, phoneNumber: null };
        }

        // Fetch the first member's user document to retrieve their phone number
        const userResponse = await databases.listDocuments(
          "VenturesDB",
          "usersColl",
          [Query.equal("$id", memberIds[0])] // Use the first member ID
        );

        if (userResponse.total === 0) {
          console.error("User not found");
          return { venture, phoneNumber: null };
        }

        const user = userResponse.documents[0];
        const phoneNumber = user.phone || null; // Get the phone number if it exists
        console.log("User phone number:", phoneNumber);

        return { venture, phoneNumber };
      } catch (error) {
        console.error(
          "Failed to get member organisations or user details:",
          error
        );
        return { venture, phoneNumber: null };
      }
    } else {
      console.error("Creator not found on venture");
      return { venture, phoneNumber: null };
    }
  } catch (error) {
    console.error("Failed to get venture:", error);
    return null; // Return null if there's an error fetching the venture
  }
}

export default getOneVenture;

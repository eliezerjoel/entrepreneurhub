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

    const organisation = venture.creator; // Access creator directly

    if (organisation) {
      try {
        // Query organisationsColl for a document where members array includes the organisation
        console.log("Organisation tufunye kano:", organisation);
        const member = await databases.listDocuments(
          "VenturesDB",
          "organisationsColl",
          [
            Query.contains("members", ["672d95a200170a51f704"]), // Ensure organisation is wrapped in an array
          ]
        );

        console.log("Member organisations:", member);
      } catch (error) {
        console.error("Failed to get member organisations:", error);
      }
    } else {
      console.error("Creator not found on venture");
    }

    return venture; // Return the venture data even if creator is null
  } catch (error) {
    console.error("Failed to get venture:", error);
    return null; // Return null if there's an error fetching the venture
  }
}

export default getOneVenture;

// [
//             Query.equal("members", [organisation]), // Ensure organisation is wrapped in an array
//           ]
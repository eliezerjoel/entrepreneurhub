import { createAdminClient } from "../../config/appwrite";

async function countOrganisations() {
  try {
    const { databases } = await createAdminClient();

    // Fetch total count of all Organisations
    const organisations = await databases.listDocuments(
      "VenturesDB",
      "OrganisationsColl",
      [],
      1 // Limit results to 1 to reduce data load
    );

    const totalCount = organisations.total;
    return totalCount;
  } catch (error) {
    console.log("Failed to get Organisations count", error);
    return null;
  }
}


export { countOrganisations };

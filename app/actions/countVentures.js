import { createAdminClient } from "../../config/appwrite";

async function countVentures() {
  try {
    const { databases } = await createAdminClient();

    // Fetch total count of all ventures
    const ventures = await databases.listDocuments(
      "VenturesDB",
      "venturesColl",
      [],
      1 // Limit results to 1 to reduce data load
    );

    const totalCount = ventures.total;
    return totalCount;
  } catch (error) {
    console.log("Failed to get ventures count", error);
    return null;
  }
}

async function countApprovedVentures() {
  try {
    const { databases } = await createAdminClient();

    // Fetch count of approved ventures (isApproved = true)
    const approvedVentures = await databases.listDocuments(
      "VenturesDB",
      "venturesColl",
      [Query.equal("isApproved", true)],
      1 // Limit results to 1 to reduce data load
    );

    const totalApprovedCount = approvedVentures.total;
    return totalApprovedCount;
  } catch (error) {
    console.log("Failed to get approved ventures count", error);
    return null;
  }
}

async function countUnapprovedVentures() {
  try {
    const { databases } = await createAdminClient();

    // Fetch count of unapproved ventures (isApproved = false)
    const unapprovedVentures = await databases.listDocuments(
      "VenturesDB",
      "venturesColl",
      [Query.equal("isApproved", false)],
      1 // Limit results to 1 to reduce data load
    );

    const totalUnapprovedCount = unapprovedVentures.total;
    return totalUnapprovedCount;
  } catch (error) {
    console.log("Failed to get unapproved ventures count", error);
    return null;
  }
}

export { countVentures, countApprovedVentures, countUnapprovedVentures };

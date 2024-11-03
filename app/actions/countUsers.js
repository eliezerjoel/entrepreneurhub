import { createAdminClient } from "../../config/appwrite";
import { Query } from "node-appwrite";

async function countUsers() {
  try {
    const { databases } = await createAdminClient();

    // Fetch total count of all users
    const users = await databases.listDocuments(
      "VenturesDB",
      "usersColl",
      [],
      1 // Limit results to 1 to reduce data load
    );

    const totalCount = users.total;
    return totalCount;
  } catch (error) {
    console.log("Failed to get users count", error);
    return null;
  }
}

async function countTodayUsers() {
  try {
    const { databases } = await createAdminClient();

    // Calculate the start and end of today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // Query users created today based on `createdAt` timestamp
    const todayUsers = await databases.listDocuments(
      "VenturesDB",
      "usersColl",
      [
        Query.greaterThanEqual("$createdAt", startOfDay.toISOString()),
        Query.lessThanEqual("$createdAt", endOfDay.toISOString()),
      ],
      1 // Limit results to 1 to reduce data load
    );

    const todayCount = todayUsers.total;
    return todayCount;
  } catch (error) {
    console.log("Failed to get today's users count", error);
    return null;
  }
}

export { countUsers, countTodayUsers };

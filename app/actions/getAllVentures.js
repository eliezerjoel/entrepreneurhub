
import { createAdminClient } from "../../config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllVentures() {
  try {
    const { databases } = await createAdminClient();
    const { documents: ventures } = await databases.listDocuments(
      "VenturesDB",
      "venturesColl"
    );

    // Revalidate the cache for this path
    // revalidatePath("/", "layout");
    console.log(ventures)
    return ventures;
  } catch (error) {
    console.log("Failed to get ventures", error);
  }
}
export default getAllVentures;

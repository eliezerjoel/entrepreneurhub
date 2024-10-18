import { createAdminClient } from "../../config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getOneVenture(id) {
  try {
    const { databases } = await createAdminClient();
    const venture = await databases.getDocument(
      "VenturesDB",
      "venturesColl",
      id
    );

    // revalidatePath("/", "layout");
    // console.log(venture)
    return venture;
  } catch (error) {
    console.log("Failed to get venture"+ error);
  }
}
export default getOneVenture;

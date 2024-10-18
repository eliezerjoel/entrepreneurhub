import { Databases, Client, Account, Storage } from "node-appwrite";

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66fd757200140d617b64")
    .setKey(
      "standard_3c6febb9fb3304f6b86cc2c699ab74b73ab814f3617818d2fafa5b1327e9afece5318119f2b716579c752717dfd96b66cc37f9efb04b5eea2858ac85b60d24fc47053f46005f530bdd39c223d33ad9776cac55e382cec4e29a3749bc08c06bc717c41b9afcadf82b9cd67786a54b0765abccf673c5c21ebcf8ac971926acb040"
    );
  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66fd757200140d617b64");
  if (session) {
    client.setSession(session);
  }
  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

export { createAdminClient, createSessionClient };

const { MongoClient } = require("mongodb");

async function connectData() {
  const uri = process.env.DatabaseURL;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

connectData().catch(console.error);

async function Databases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

module.exports = { connectData, Databases };

async function connectData() {
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = process.env.DatabaseURL;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    
    console.log("[Database]: Connected to Database.")
  });
}

module.exports = {connectData}

import { MongoClient } from "mongodb";

async function handler(req, res) {
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(dbUrl);
    const db = client.db();
    const placesCollection = db.collection("places");
    const result = await placesCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Places inserted!" });
  }
}

export default handler;

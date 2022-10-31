import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log("hereeeeee");
  console.log(process.env.DB_PASSWORD);

  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
    const db = client.db();

    const placesCollection = db.collection("places");

    const result = await placesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Places inserted!" });
  }
}

export default handler;

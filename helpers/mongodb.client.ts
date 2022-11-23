import { MongoClient } from "mongodb";

export const getCollection = async (collectionName: string, dbUrl: string) => {
  const client = await MongoClient.connect(dbUrl);
  const collection = client.db().collection(collectionName);
  const collectionDatas = await collection.find().toArray();
  client.close();
  return collectionDatas;
};

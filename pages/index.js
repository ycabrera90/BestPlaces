import Head from 'next/head';
import { MongoClient } from "mongodb";

import PlacesList from "../components/PlacesList/PlacesList";
import MainLayout from "../components/UI/MainLayout/MainLayout";

function HomePage({ places }) {
  return (
    <MainLayout>
      <Head>
        <title>Best Places</title>
        <meta
          name="description"
          content="Look at the best places in the world"
        />
      </Head>
      <PlacesList meetups={places} />;
    </MainLayout>
  );
}

export async function getStaticProps() {
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const placesCollection = db.collection("places");
  const datas = await placesCollection.find().toArray();

  const places = datas.map((item) => ({
    title: item.title,
    address: item.address,
    image: item.image,
    id: item._id.toString(), // <--- this is because _id is an object
  }));

  client.close();
  return {
    props: {
      places,
    },
  };
}

export default HomePage;

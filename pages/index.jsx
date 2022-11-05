// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pageTitle = "Best Places";
const pageDescription = "Look at the best places in the world";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import React from 'react'
import PageDatas from "../components/UI/PageDatas/PageDatas";
import { MongoClient } from "mongodb";

import MainLayout from "../components/UI/MainLayout/MainLayout";
import PlacesList from "../components/PlacesList/PlacesList";
import MainItems from '../components/PlacesList/MainItems/MainItems';

function HomePage({ places }) {
  return (
    <>
      <PageDatas title={pageTitle} description={pageDescription} />
      <MainLayout backgroundImages={places}>
        {/* <PlacesList places={places} /> */}
        <MainItems places={places}/>
      </MainLayout>
    </>
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
    // revalidate: 1,
  };
}

export default HomePage;
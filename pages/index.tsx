import { ReactElement } from "react";
import { MongoClient } from "mongodb";
import { Places } from "../types";
import ItemsScroll from "../components/ItemsScroll/ItemsScroll";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import type { NextPageWithLayout } from "./_app";


const HomePage: NextPageWithLayout<{ places: Places[] }> = ({ places }) => {
  return <ItemsScroll places={places} />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const placesCollection = db.collection("places");
  const datas = await placesCollection.find().toArray();

  const places = datas.map(({ _id, title, address, image }) => ({
    title,
    address,
    image,
    id: _id.toString(), // <--- this is because _id is an object
  }));
  client.close();

  return {
    props: {
      places,
    },
    // revalidate: 1, <<-- in real this comment should be removed
  };
}

export default HomePage;

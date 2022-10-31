import { MongoClient } from "mongodb";

import PlacesList from "../components/PlacesList/PlacesList";
import MainLayout from "../components/UI/MainLayout/MainLayout";

// const DUMMY_PLACES = [
//   {
//     id: "p1",
//     title: "New York City",
//     image:
//       "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
//     address: "Empire State Building, West 34th Street, New York, NY, USA",
//     description:
//       "New York City is like no other city in the world, and one that must be experienced to be fully appreciated",
//   },
//   {
//     id: "p2",
//     title: "Golden Gate Bridge",
//     image:
//       "https://www.planetware.com/photos-large/USNY/usa-best-places-san-francisco.jpg",
//     address: "Golden Gate Bridge, Golden Gate Bridge, San Francisco, CA, USA",
//     description:
//       "West Coast city is the perfect getaway destination for couples, singles, or families",
//   },
// ];

function HomePage({ places }) {
  return (
    <MainLayout>
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
    id: item._id.toString(),    // <--- this is because _id is an object
  }));

  client.close();
  return {
    props: {
      places,
    },
  };
}

export default HomePage;

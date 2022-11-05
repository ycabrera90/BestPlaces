import { MongoClient, ObjectId } from "mongodb";

import PlaceDetail from "../../components/PlaceDetail/PlaceDetail";

function PlaceDetailsPage({ placeData }) {
  return (
    <PlaceDetail
      image={placeData.image}
      title={placeData.title}
      address={placeData.address}
      description={placeData.description}
    />
  );
}

export async function getStaticPaths() {
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const placesCollection = db.collection("places");
  const places = await placesCollection.find({}, { _id: 1 }).toArray();
  const paths = places.map((place) => ({
    params: { placeId: place._id.toString() },
  }));
  client.close();

  return {
    fallback: 'blocking',
    paths,
  };
}

export async function getStaticProps(context) {
  const placeId = context.params.placeId;
  const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const placesCollection = db.collection("places");
  const selectedPlace = await placesCollection.findOne({
    _id: ObjectId(placeId),
  });
  client.close();

  return {
    props: {
      placeData: {
        id: selectedPlace._id.toString(),
        title: selectedPlace.title,
        address: selectedPlace.address,
        image: selectedPlace.image,
        description: selectedPlace.description,
      },
    },
  };
}

export default PlaceDetailsPage;

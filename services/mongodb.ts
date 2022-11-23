const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pbuk80v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

import { getCollection } from "@/helpers/mongodb.client";
import { placesAdapter } from "@/adapters/mongodb.adapter";

export const getPlaces = async () => {
  const places = await getCollection("places", dbUrl);
  return placesAdapter(places);
}; 
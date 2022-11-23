import { Places } from '@/models/Places.type';
import { Document, WithId } from 'mongodb';

export const placesAdapter = (collection: WithId<Document>[]): Places[] => {
  return collection.map(({ _id, title, address, image }: any) => ({
    id: _id.toString(),
    title,
    address,
    image,
  }));
};

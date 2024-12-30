import { MongoClient } from "mongodb";

const clientPromise = () => {
  const MONGO_URL = process.env.NEXT_PUBLIC_DATABASE_URL;
  const options = {};

  if (!MONGO_URL) {
    throw new Error('Invalid/missing envirnmrnt variable:"MONGO_URL" ');
  }

  const client = new MongoClient(MONGO_URL, options);
  return client.connect();
};

export default clientPromise;

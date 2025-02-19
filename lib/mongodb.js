import { MongoClient } from "mongodb";

const OPTIONS = {};
const MONGO_URL = process.env.MONGODB_URI;

const client = new MongoClient(MONGO_URL, OPTIONS);

export const db = client.db("sample_mflix");

export const clientPromise = () => {
  const MONGO_URL = process.env.MONGODB_URI;
  const options = {};

  if (!MONGO_URL) {
    throw new Error('Invalid/missing envirnmrnt variable:"MONGO_URL" ');
  }

  const client = new MongoClient(MONGO_URL, options);
  return client.connect();
};

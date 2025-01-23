//Movie related server actions

import clientPromise from "@/lib/mongodb";

//import { signUp } from "@/lib/auth-client";

export const createMovie = async (movie) => {
  try {
    const client = await clientPromise(); // mongo db client
    const db = client.db("sample_mflix"); // database instance

    //create movie query

    const result = await db.collection("movies-new").insertOne(movie);
    console.log(`Inserted Id : ${result.insertedId}`);
  } catch {
    console.log("Insert failed");
  }
};

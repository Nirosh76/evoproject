//Movie related server actions

import { db } from "@/lib/mongodb";

//import { signUp } from "@/lib/auth-client";

export const createMovie = async (movie) => {
  try {
    //create movie query

    const result = await db.collection("movies-new").insertOne(movie);
    console.log(`Inserted Id : ${result.insertedId}`);
  } catch {
    console.log("Insert failed");
  }
};

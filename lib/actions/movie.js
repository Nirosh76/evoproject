//Movie related server actions
"use server";
import clientPromise from "@/lib/mongodb";

//import { signUp } from "@/lib/auth-client";

export const createMovie = async (movie) => {
  try {
    console.log("CREATE MOVIE", movie);
    const client = await clientPromise(); // mongo db client
    const db = client.db("sample_mflix"); // database instance
    //create movie query
    const result = await db.collection("movies_n").insertOne(movie);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }

    //console.log(`Inserted Id : ${result.insertedId}`);
  } catch (error) {
    console.log("Insert failed");
    return { success: false, error };
  }
};

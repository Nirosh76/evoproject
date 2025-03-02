//Movie related server actions
"use server";
import clientPromise from "@/lib/mongodb";
import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
//import { signUp } from "@/lib/auth-client";

export const createMovie = async (movie) => {
  try {
    console.log("CREATE MOVIE", movie);

    //create movie query
    const result = await db.collection("movies").insertOne(movie);

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

export const updateMovie = async (id, movie) => {
  try {
    //create movie query
    const result = await db
      .collection("movies")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: true }
      );

    console.log("ID ", id);

    if (result.acknowledged) {
      console.log(`Inserted Id : ${result.upsertedId}`);
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Update failed");
    return { success: false, error };
  }
};

export const deleteMovie = async (id) => {
  try {
    //create movie query
    const result = await db
      .collection("movies")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    console.log(`Movie was deleted : ${result.deletedCount} `);

    console.log("ID ", id);

    if (result.acknowledged) {
      console.log(`Inserted Id : ${result.upsertedId}`);
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Delete failed");
    return { success: false, error };
  }
};

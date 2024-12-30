import clientPromise from "@/app/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
/*
const MOVIES = [
 { id: 1, title: "Harry Potter" },
  { id: 2, title: "Harry Potter2" },
  { id: 3, title: "Lord of the Ring" },
  { id: 4, title: "Robin Hood" },
  { id: 5, title: "Hobbit" },
  { id: 6, title: "Inception (2010)" },
  { id: 7, title: "The Shawshank Redemption (1994)" },
  { id: 8, title: "Parasite (2019)" },
];*/
export const GET = async (req) => {
  //get data from MongoDB
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find()
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);

    console.log("MONGO MFLIX", movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
  }

  // return NextResponse.json({ success: true, movies: MOVIES });
};

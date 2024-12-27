import { NextRequest, NextResponse } from "next/server";

const MOVIES = [
  { id: 1, title: "Harry Potter" },
  { id: 2, title: "Harry Potter2" },
  { id: 3, title: "Lord of the Ring" },
  { id: 4, title: "Robin Hood" },
  { id: 5, title: "Hobbit" },
  { id: 6, title: "Inception (2010)" },
  { id: 7, title: "The Shawshank Redemption (1994)" },
  { id: 8, title: "Parasite (2019)" },
];
export const GET = async (req) => {
  return NextResponse.json({ success: true, movies: MOVIES });
};

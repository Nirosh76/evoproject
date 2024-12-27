import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  const request = await req.json();
  console.log(request);
  //database logic
  //find the use
  //check password
  //return the response with the tocken
  return NextResponse.json({ success: true, username: "rbs" });
};

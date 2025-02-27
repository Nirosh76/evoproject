import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    console.log(name, email, password);

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error: "Name , email, and password required",
        },
        { status: 400 }
      );
    }

    try {
      const existingUser = await db.collection("users").findOne({ email });

      if (existingUser) {
        return NextResponse.json(
          { error: "user already exist" },
          { status: 409 }
        );
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const result = await db.collection("users").insertOne({
        name,
        email,
        password: hashPassword,
        createdAt: new Date(),
      });

      if (result && result.acknowledged) {
        //console.log("MDB result", result);
        return NextResponse.json({
          success: true,
          user: {
            userId: result.insertedId,
            name,
            email,
          },
        });
      } else {
        return NextResponse.json(
          {
            error: "User registration failed",
          },
          { status: 500 }
        );
      }

      //console.log("crypted ", hashPassword);

      //npm i bcrypt

      //console.log("Is existing user", existingUser);
    } catch (error) {
      console.log("Mongo error", error);
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
};

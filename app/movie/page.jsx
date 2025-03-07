import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaComputer } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { getMovies } from "@/lib/apis/server";
import { auth } from "@/lib/auth";

//export const revalidate = 60;

export const dynamic = "force-dynamic";

export default async function MoviesPublicPage() {
  //1. add shadcn card
  //2. create movies get end point
  //3. read the dummy responses
  //4. render dataset in ui

  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // console.log("SESSION", session);

  const moviesQuery = await getMovies();
  // comment

  console.log("length ", moviesQuery?.length);
  return (
    <div className="container space-y-4 my-12">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Movies</h1>
        <Link href="dashboard/movie">
          <Button>
            <LayoutDashboard />
            Go to Dashboard
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {moviesQuery?.length &&
          moviesQuery.map((movie) => (
            <div key={movie._id} className="h-[480px] ">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    {movie?.title} ({movie?.year ?? "N/A"})
                  </CardTitle>
                  <CardDescription>{movie?.year ?? "N/A"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center bg-black w-full h-[180px] mb-4 rounded">
                    <Image
                      src={movie?.poster}
                      alt={movie?.title}
                      width={200}
                      height={400}
                      className="h-full w-auto object-contain group-hover:scale-125 duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[154px]">
                    <div> Year : {movie?.year ?? "N/A"}</div>
                    <p className="line-clamp-3 text-xs">{movie?.plot}</p>
                    {/* <div>
                      {movie?.genres?.length &&
                        movie?.genres?.map((genres, index) => (
                          <div key={index} className="text-blue-700">
                            
                          </div>
                        ))}
                    </div> */}
                    <div className="text-sm font-semibold">
                      {movie?.genres?.length && movie?.genres?.join(" / ")}
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <Badge variant="Success" className="font-medium">
                        Rated : {movie?.rated ?? "N/A"}
                      </Badge>
                      <div className="flex space-x-2 font-semibold">
                        <CiFaceSmile className="text-red-700" />
                        <FaComputer />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

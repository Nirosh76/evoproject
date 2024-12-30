import { getMovies } from "@/app/libs/apis/server";
import React from "react";

export default async function dashboardpage() {
  //1. add shadcn card
  //2. create movies get end point
  //3. read the dummy responses
  //4. render dataset in ui
  const moviesQuery = await getMovies();

  console.log("MOVIES", moviesQuery);

  console.log("length ", moviesQuery?.length);
  return (
    <main>
      <nav className="bg-blue-300 w-full h-16 flex  justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl "> Mflix Dashboard</h1>
        </div>
      </nav>

      {/* body */}

      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-96 bg-cyan-500 ">
                {movie.title}{" "}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

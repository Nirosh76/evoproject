//movie data server component
//get ddirectly from db

import { db } from "@/lib/mongodb";
import MovieTable from "./movie-table";

export default async function MovieData() {
  try {
    const moviesQuery = await db
      .collection("movies")
      .find()
      .sort({ metacritic: -1 })
      .limit(50)
      .toArray();

    if (moviesQuery) {
      //refine to array

      const refinedMovies = moviesQuery.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
      }));

      // console.log(refinedMovies);

      //pass movie data to movies table
      //return movie table
      return <MovieTable movies={refinedMovies} />;
    }
  } catch (error) {
    console.log(error);
    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="text-red-700 font-medium animate-pulse duration-1000">
          No movies found
        </p>
      </div>
    );
  }
}

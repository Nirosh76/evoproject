"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import EditingMovieForms from "./edit-movie-form";
import Test from "./test";
import { updateMovie } from "@/lib/actions/movie";
import { useRouter } from "next/navigation";

export default function MovieTable({ movies }) {
  const [isSaving, setIsSaving] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [deletingMovie, setDelitingMovie] = useState(null);
  const router = useRouter();

  const HandleEdit = (movie) => {
    //console.log("edit", movie);
    setEditingMovie(movie);
  };

  const handleEditSubmit = async (movie) => {
    console.log("at table ", movie);

    const { id, title, year, plot, rated, genres, poster, imdb } = movie;

    setIsSaving(true);
    const resp = await updateMovie(id, {
      title,
      year,
      plot,
      rated,
      genres,
      poster,
      imdb,
    });

    setIsSaving(false);

    if (resp?.success) {
      setEditingMovie(false);
      router.refresh();
    }
  };

  const HandleDelete = (m) => {
    // console.log("delete", m);
    setDelitingMovie(m);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">#cover</TableHead>
            <TableHead className="font-bold">Movie Title</TableHead>
            <TableHead className="font-bold">Year</TableHead>
            <TableHead className="font-bold">Rated</TableHead>
            <TableHead className="font-bold"> IMDB</TableHead>
            <TableHead className="font-bold">Genres</TableHead>
            <TableHead className="font-bold text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell> Poster URL</TableCell>
              <TableCell> {movie?.title ?? "N/A"} </TableCell>
              <TableCell>{movie?.year ?? "N/A"}</TableCell>
              <TableCell>{movie?.rated ?? "N/A"}</TableCell>
              <TableCell>
                {movie?.imdb?.rating ?? "N/A"} ({movie?.imdb?.votes ?? 0} votes)
              </TableCell>
              <TableCell>{movie?.genres?.join(", ")}</TableCell>
              <TableCell>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => HandleEdit(movie)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="min-w-[120px]"
                    onClick={() => HandleDelete(movie)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editingMovie && (
        <EditingMovieForms
          movie={editingMovie}
          open={true}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingMovie(null)}
          isLoading={isSaving}
        />
      )}

      {/* {deletingMovie && <Test />} */}
    </div>
  );
}

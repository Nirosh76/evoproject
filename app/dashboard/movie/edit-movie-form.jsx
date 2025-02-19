"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/multi-select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GENRES, RATINGS } from "@/lib/constants";
import React, { useState } from "react";

export default function EditingMovieForms({
  movie,
  open,
  onCancel,
  isLoading,
}) {
  const [title, setTitle] = useState(movie?.title);
  const [year, setYear] = useState(movie?.year);
  const [plot, setPlot] = useState(movie?.plot);
  const [poster, setPoster] = useState(movie?.poster);
  const [genres, setGenres] = useState(movie?.genres);
  const [rated, setRated] = useState(movie?.rated);
  const [imdbRating, setIMDBRating] = useState(movie?.imdb?.rating);
  // const imdb = Number(FormData.get("imdb"));

  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = () => {
    //save the updated movie to the database
  };
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogDescription>Update the selected movie</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitForm}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title"> Movie Title</Label>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.targat.value)}
                placeholder="Enter the movie title"
              />
            </div>
            <div>
              <Label htmlFor="year"> Movie Year</Label>
              <Input
                id="year"
                name="year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.targat.value)}
                placeholder="Enter movie year"
              />
            </div>
            <div>
              <Label htmlFor="title"> Movie Plot</Label>
              <Textarea
                id="plot"
                name="plot"
                placeholder="Enter movie plot"
                value={plot}
                onChange={(e) => setTitle(e.targat.value)}
              />
            </div>
            <div>
              <Label htmlFor="genres">Movie Genres</Label>
              <MultiSelect
                list={genresList}
                value={genres}
                placeholder="Select movie genres"
                selectedItems={genres}
                onValueChange={setGenres}
              />
            </div>
            <div>
              <Label htmlFor="poster"> Movie URL </Label>
              <Input
                id="poster"
                name="poster"
                value={poster}
                onChange={(e) => setPoster(e.targat.value)}
                placeholder="Enter the poster URL"
              />
            </div>

            <div>
              <Label htmlFor="rated">Movie Rated</Label>
              <Select value={rated} onValueChange={(val) => setRated(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent>
                  {RATINGS.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="year"> IMdb Rating</Label>
              <Input
                id="imdb"
                name="imdb"
                max="10.0"
                step="0.1"
                type="number"
                placeholder="Enter Imdb Rating"
                value={imdbRating}
                onChange={(e) => setIMDBRating(Number(e.targat.value))}
              />
            </div>

            <div className="w-full flex justify-end space-x-2">
              <div>
                <Button type="reset" variant="outline">
                  Clear Form
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="animate-spin" />}
                  Add Movie
                </Button>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

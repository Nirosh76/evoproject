"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
//import { registerUser } from "@/lib/apis/server";

import { ToastAction } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";

import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";
import { createMovie } from "@/lib/actions/movie";

export default function AddMovieForm() {
  const [genres, setGenres] = useState([]);
  const [rated, setRated] = useState();
  const [isLoading, setLoading] = useState("");
  const { toast } = useToast();

  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const title = formData.get("title")?.toString();
    const year = formData.get("year");
    const plot = formData.get("plot")?.toString();
    const poster = formData.get("poster")?.toString();
    const imdb = formData.get("imdb")?.toString();

    setLoading(true);

    const resp = await createMovie({
      title,
      year,
      plot,
      rated,
      genres,
      poster,
      imdb: { rating: imdb },
    });

    setLoading(false);

    if (resp.success) {
      toast({
        variant: "success",
        title: "Movie Added Successfull",
        description: "Added to the database.",
        action: (
          <ToastAction altText="login" className="hover:bg-green-600">
            Login
          </ToastAction>
        ),
      });
    }
    /* if (title && year && plot && rated) {
      console.log(title, year, plot, rated, genres);
    }
      */
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Movie</CardTitle>
        <CardDescription>Add amovie to Mflix database</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmitForm}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title"> Movie Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the movie title"
            />
          </div>
          <div>
            <Label htmlFor="title"> Movie Year</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder="Enter movie year"
            />
          </div>
          <div>
            <Label htmlFor="title"> Movie Plot</Label>
            <Textarea id="plot" name="plot" placeholder="Enter movie plot" />
          </div>
          <div>
            <Label htmlFor="genres">Movie Genres</Label>
            <MultiSelect
              list={genresList}
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
              defaultValue="https://m.media-amazon.com/images/M/MV5BYzk0YWQzMGYtYTM5MC00NjM2LWE5YzYtMjgyNDVhZDg1N2YzXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg"
              placeholder="Enter the poster URL"
            />
          </div>

          <div>
            <Label htmlFor="rated">Movie Rated</Label>
            <Select onValueChange={(val) => setRated(val)}>
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
            />
          </div>
          <CardFooter className="w-full flex justify-end space-x-2">
            <div>
              <Button type="reset" variant="outline">
                Clear Form
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="animate-spin" />}
                Add Movie
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </form>
    </Card>
  );
}

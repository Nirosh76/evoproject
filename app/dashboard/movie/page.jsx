import React from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Shell, Loader } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MovieData from "./movie-data";

export default function MoviesPage() {
  return (
    <div className="space-y-4 w-full">
      <div className="flex  justify-end">
        <Link href="/movie">
          <Button variant="outline">
            <Eye />
            View as user
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle> Movies Table </CardTitle>
          <CardDescription className="sr-only">
            View and manage all movies
          </CardDescription>
          <CardContent>
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-[180px]">
                  <Shell className="animate-spin duration-1000 text-green-700" />
                </div>
              }
            >
              <MovieData />
            </Suspense>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}

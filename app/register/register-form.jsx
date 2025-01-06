"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { registerUser } from "@/app/libs/apis/server";
//keep thi9s as a cli9ent commponent (fu8nt9ional componnent)

const DEFAULT_ERROR = {
  error: false,
  message: "",
};
export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setLoding] = useState(false);

  const handleSubmitForm = async (event) => {
    event?.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString() ?? "";
    const email = formData.get("email").toString() ?? "";
    const password = formData.get("password").toString() ?? "";
    const password2 = formData.get("password2").toString() ?? "";

    //console.log("error", error);

    console.log({ name, email, password });

    if (name && email && password && password2) {
      if (password === password2) {
        setError(DEFAULT_ERROR);
        setLoding(true);
        const regResp = await registerUser({ name, email, password });
        setLoding(false);
        console.log("check ", regResp.responseBody);
        if (regResp?.responseBody?.error) {
          setError({ error: true, message: regResp.responseBody.error });
          console.log("set error");
        }
      } else {
        setError({ error: true, message: "Password doesn't match" });
        console.log("error", error);
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>
            Enter your informatin to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="your name" />
              </div>
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password2">Password</Label>
                <Input
                  id="password2"
                  name="password2"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>

              {/* form errors */}

              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-600 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center text-xs gap-1">
                Already have an Account ?{" "}
                <Link href="\login" className="text-red-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

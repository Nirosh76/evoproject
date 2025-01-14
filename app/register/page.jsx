import React from "react";
import RegisterForm from "./register-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
//keep as server componnent (fu8ncti9onal commponent)
export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="container mx-auto">
      <RegisterForm />
    </div>
  );
}

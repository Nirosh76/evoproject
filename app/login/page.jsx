import React from "react";
import Loginform from "./login-form";

export default function Loginpage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <Loginform title={"RBS"} />
    </div>
  );
}

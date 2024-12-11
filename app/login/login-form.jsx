"use client";
import React, { useState } from "react";

export default function Loginform({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data :", { email: email, password: password });
  };
  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-white shadow-md border border-gray-400 rounded-lg p-4">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-center text-xl font-semibold text-gray-900 block mb-2">
            Sign in to {title}
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:right-1 focus:ring-offset-2  focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
              placeholder="yourname@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:right-1 focus:ring-offset-2  focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
              placeholder="*******"
            />
          </div>
          {/* remember me */}
          <div className="flex justify-between">
            <div className="flex ">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className=" font-md text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <a
              href=""
              className="text-sm text-blue-700 hover:underline ml-auto font-semibold"
            >
              Lost Password?
            </a>
          </div>

          {/* submit button */}

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
          <div className=" flex justify-center text-sm font-medium text-gray-500 space-x-2">
            <span> Not registered </span>
            <a href="/register" className="text-blue-700 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
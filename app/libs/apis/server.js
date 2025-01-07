import ky from "ky";
import { api } from "../api";

export const loginUser = async (loginData) => {
  // const response = await fetch("http://localhost:3000/api/v1/login", {
  const response = await api.post("login)", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  return response.json();
  console.log("LOGIN ACTION", response.json());
};

export const registerUser = async (formData) => {
  try {
    //console.log("formData", formData);
    const response = await api.post("register", { json: formData });

    if (response.ok) {
      return response.json();
    } else {
      return undefined;
    }
  } catch (error) {
    const status = error.response.status;
    const responseBody = await error.response.json();

    console.log("status ", status);
    console.log("resBody ", responseBody.error);

    if (status && responseBody) {
      // return { error: true, status, responseBody };
      if (status === 409) {
        return { responseBody };
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies", { cache: "no-store" });

    /* const response = await ky.get("http://localhost:3000/api/v1/movies", {
      cache: "no-store",
    });*/

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log("e1 ", error);
    if (error) {
      const status = error?.response?.status;
      const responseBody = await error?.response?.json();
      console.log("HTTP error ", status, responseBody);
    } else {
      console.log("Unknown error");
    }
    return undefined;
  }
};

"use server";
import { FieldValues } from "react-hook-form";

export const registerUser = async (values: FieldValues) => {
  console.log("Sending Registration Request with Values: ", values);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-store",
  });

  const data = await res.json();
  console.log("Received Registration Response: ", data);
  return data;
};

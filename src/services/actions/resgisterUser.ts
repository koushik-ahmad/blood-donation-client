"use server";
import { FieldValues } from "react-hook-form";

export const registerUser = async (values: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

export const userLogin = async (values: FieldValues, redirect?: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(values),
    cache: "no-store",
  });

  const data = await res.json();

  if (data.success && data?.data?.token) {
    setAccessToken(data?.data?.token, { redirect });
  }
  return data;
};

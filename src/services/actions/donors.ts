"use server";

export const donors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor-list`, {
      method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    }
  );

  const donorLists = await res.json();
  return donorLists;
};
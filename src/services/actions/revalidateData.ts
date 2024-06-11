"use server";

import { revalidateTag } from "next/cache";

const revalidateData = (path: string) => {
  revalidateTag(path);
};
export default revalidateData;

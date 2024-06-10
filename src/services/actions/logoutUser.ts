import { authKey } from "@/constants/authKey";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { NextRouter } from "next/router";

export const logoutUser = (router: AppRouterInstance) => {
  localStorage.removeItem(authKey);
  deleteCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};

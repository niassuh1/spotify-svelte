import { redirect } from "@sveltejs/kit";

import type { LayoutServerLoad } from "./$types";

const match = ["/login", "/offline"];

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  const accessCode = cookies.get("access_code");
  const accessToken = cookies.get("access_token");
  try {
    if (!accessCode) {
      if (!match.includes(url.pathname)) redirect(301, "/login");
    } else {
      if (!accessToken) {
        if (!match.includes(url.pathname)) redirect(301, "/login");
      }
    }
  } catch (e) {
    console.error(e);
    if (url.pathname !== "/login") redirect(301, "/login");
  }
};

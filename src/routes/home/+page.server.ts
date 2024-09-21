import type { PageServerLoad } from "./$types";

import { redirect, type Actions } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {
  const accessToken = cookies.get("access_token");
  console.log(accessToken);
  if (accessToken) {
    try {
      return {
        accessToken,
      };
    } catch (e) {
      console.error(e);
      redirect(301, "/login");
    }
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  logout: async ({ cookies }) => {
    cookies.delete("access_code", { path: "/" });
    cookies.delete("access_token", { path: "/" });
    redirect(301, "/login");
  },
};

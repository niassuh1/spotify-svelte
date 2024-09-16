import type { PageServerLoad } from "./$types";

import { redirect } from "@sveltejs/kit";

export const load = (async ({ cookies }) => {
  const accessToken = cookies.get("access_token");
  if (accessToken) {
    redirect(301, "/home");
  } else {
    redirect(302, "/login");
  }

  return {};
}) satisfies PageServerLoad;

import { redirect, type Actions } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";
import { spotifyClient } from "$lib/spotify/spotify-client";

export const load: PageServerLoad = ({ cookies }) => {
  const accessCode = cookies.get("access_code");
  const accessToken = cookies.get("access_token");

  if (accessCode && accessToken) {
    redirect(301, "/home");
  }
};

export const actions: Actions = {
  default: async () => {
    spotifyClient.login();
  },
};

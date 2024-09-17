import type { PageServerLoad } from "./$types";

import { redirect, type Actions } from "@sveltejs/kit";
import { spotifyClient } from "$lib/spotify/spotify-client";
import { checkAuth } from "../../util/check-auth";

export const load = (async ({ cookies }) => {
  await checkAuth({ cookies });

  const accessToken = cookies.get("access_token");
  if (accessToken) {
    const user = await spotifyClient.getCurrentUserProfile({ accessToken });
    const categories = await spotifyClient.getCategories({
      accessToken,
      limit: 15,
    });
    const playlists = await spotifyClient.getPlaylists({
      accessToken,
      limit: 10,
    });
    return {
      user,
      categories,
      playlists,
      accessToken,
    };
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  logout: async ({ cookies }) => {
    cookies.delete("access_code", { path: "/" });
    cookies.delete("access_token", { path: "/" });
    redirect(301, "/login");
  },
};

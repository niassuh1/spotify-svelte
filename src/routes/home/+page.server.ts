import type { PageServerLoad } from "./$types";

import { redirect, type Actions } from "@sveltejs/kit";
import { spotifyClient } from "$lib/spotify/spotify-client";

export const load = (async ({ cookies }) => {
  const accessToken = cookies.get("access_token");
  if (accessToken) {
    try {
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

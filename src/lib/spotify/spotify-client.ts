import { redirect } from "@sveltejs/kit";
import {
  REDIRECT_URI,
  SPOTIFY_API_URL,
  SPOTIFY_BASE_URL,
  SPOTIFY_CLIENT_ID,
} from "constants/spotify";

import axios from "axios";
import type { UserDetails } from "types/user-details";
import type { Categories } from "types/categories";
import type { Playlist } from "types/playlist";
import type { Search } from "types/search";
import type { SearchType } from "types/search-type";
import qs from "querystring";

class SpotifyClient {
  login() {
    const scope =
      "user-library-read user-top-read playlist-read-private user-read-playback-state user-read-currently-playing streaming app-remote-control";

    redirect(
      301,
      `${SPOTIFY_BASE_URL}/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}`
    );
  }

  async getCurrentUserProfile({
    accessToken,
  }: {
    accessToken: string;
  }): Promise<UserDetails> {
    const res = await axios.get(`${SPOTIFY_API_URL}/v1/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data as UserDetails;
  }

  async getCategories({
    accessToken,
    limit,
  }: {
    accessToken: string;
    limit: number;
  }): Promise<Categories> {
    const res = await axios.get(
      `${SPOTIFY_API_URL}/v1/browse/categories?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data.categories as Categories;
  }

  async getPlaylists({
    accessToken,
    limit,
  }: {
    accessToken: string;
    limit: number;
  }): Promise<Playlist> {
    const res = await axios.get(
      `${SPOTIFY_API_URL}/v1/me/playlists?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data as Playlist;
  }

  async search({
    accessToken,
    q,
    type,
    limit,
  }: {
    accessToken: string;
    q: string;
    type: SearchType;
    limit: number;
  }): Promise<Search> {
    const query = qs.stringify({
      q,
      type,
      limit,
    });
    const res = await axios.get(`${SPOTIFY_API_URL}/v1/search?${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  }
}

export const spotifyClient = new SpotifyClient();

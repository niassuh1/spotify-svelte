import { redirect } from "@sveltejs/kit";
import {
  REDIRECT_URI,
  SPOTIFY_API_URL,
  SPOTIFY_BASE_URL,
  SPOTIFY_CLIENT_ID,
} from "../../constants/spotify";
import type { UserDetails } from "../../types/user-details";
import axios from "axios";

class SpotifyClient {
  login() {
    const scope =
      "user-library-read user-top-read playlist-read-private user-read-playback-state user-read-currently-playing";

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
}

export const spotifyClient = new SpotifyClient();

import { redirect, type Cookies } from "@sveltejs/kit";
import axios from "axios";
import {
  REDIRECT_URI,
  SPOTIFY_BASE_URL,
  SPOTIFY_CLIENT_ID,
} from "../constants/spotify";
import { SPOTIFY_CLIENT_SECRET } from "$env/static/private";

export async function checkAuth({ cookies }: { cookies: Cookies }) {
  const accessCode = cookies.get("access_code");
  const accessToken = cookies.get("access_token");
  if (!accessCode) {
    redirect(301, "/login");
  } else {
    if (!accessToken) {
      const res = await axios.post(
        `${SPOTIFY_BASE_URL}/api/token`,
        {
          code: accessCode,
          client_id: SPOTIFY_CLIENT_ID,
          client_secret: SPOTIFY_CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.data.access_token) {
        cookies.set("access_token", res.data.access_token, {
          path: "/",
          expires: new Date(Date.now() + res.data.expires_in * 1000),
        });
      }
    }
  }
}

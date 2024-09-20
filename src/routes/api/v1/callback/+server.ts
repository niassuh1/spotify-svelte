import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import axios from "axios";
import {
  REDIRECT_URI,
  SPOTIFY_BASE_URL,
  SPOTIFY_CLIENT_ID,
} from "constants/spotify";
import { SPOTIFY_CLIENT_SECRET } from "$env/static/private";

export const GET: RequestHandler = async ({ url, cookies }) => {
  const code = url.searchParams.get("code");
  if (code) {
    cookies.set("access_code", code, { path: "/" });
    const res = await axios.post(
      `${SPOTIFY_BASE_URL}/api/token`,
      {
        code,
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
      if (url.pathname !== "/home") redirect(301, "/home");
    }
  }
  return new Response();
};

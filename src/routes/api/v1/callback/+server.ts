import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url, cookies }) => {
  const code = url.searchParams.get("code");
  if (code) {
    cookies.set("access_code", code, { path: "/" });
    redirect(301, "/");
  }
  return new Response();
};

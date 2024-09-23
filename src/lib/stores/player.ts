import { writable } from "svelte/store";
import type { SpotifyPlayerMethods } from "types/webplayback";

export const playerWritable = writable<SpotifyPlayerMethods>();

export const trackWritable = writable({
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
});

export const pausedWritable = writable(false);

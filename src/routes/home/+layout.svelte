<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./_components/header.svelte";
  import SideNav from "./_components/side-nav.svelte";
  import { page } from "$app/stores";
  import {
    pausedWritable,
    playerWritable,
    trackWritable,
  } from "$lib/stores/player";
  import WebPlayback from "./_components/web-playback.svelte";
  import type { SpotifyPlayer } from "types/webplayback";
  const token = $page.data.accessToken;

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 0.5,
      });

      playerWritable.set(player as any);

      player.addListener("ready", ({ device_id }: { device_id: string }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener(
        "not_ready",
        ({ device_id }: { device_id: string }) => {
          console.log("Device ID has gone offline", device_id);
        }
      );
      player.addListener("player_state_changed", (state: any) => {
        if (!state) {
          return;
        }

        trackWritable.set(state.track_window.current_track);
        pausedWritable.set(state.paused);
      });

      player.connect();
    };
  });
</script>

<div class="flex min-h-screen">
  <SideNav />
  <div class="max-h-screen overflow-y-auto flex-1">
    <Header />
    <div class=" w-full mx-auto max-w-screen-2xl">
      <slot />
      <WebPlayback />
    </div>
  </div>
</div>

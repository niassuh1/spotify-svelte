<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    pausedWritable,
    playerWritable,
    trackWritable,
  } from "$lib/stores/player";
  import { cn } from "$lib/utils";
  import Icon from "@iconify/svelte";
  import type { SpotifyPlayerMethods, Track } from "types/webplayback";

  let player: SpotifyPlayerMethods;
  let paused = false;
  let track: Track | null;
  playerWritable.subscribe((value) => {
    player = value;
  });

  trackWritable.subscribe((value) => {
    track = value as Track | null;
  });

  pausedWritable.subscribe((value) => {
    paused = value;
  });
</script>

<div
  class={cn(
    "border-t bg-background/85 backdrop-blur-md w-full h-fit fixed bottom-0  left-0 md:left-[60px] right-0 transition-transform ease-in-out duration-200",
    track && track.id ? "translate-y-0" : "translate-y-16"
  )}
>
  <div
    class="flex items-center gap-2 justify-between max-w-screen-2xl mx-auto p-3"
  >
    {#if track && track.id}
      <div class="flex gap-3 items-center">
        <img
          class="w-12 h-12 rounded-md"
          src={track.album.images[0].url}
          alt="album"
        />
        <div class="flex flex-col">
          <span class="font-medium">
            {track.name}
          </span>
          <span class="flex gap-1 text-sm text-muted-foreground">
            {#each track.artists as artist, i}
              <div>
                <span>
                  {`${artist.name}${i !== track.artists.length - 1 ? "," : ""}`}
                </span>
              </div>
            {/each}
          </span>
        </div>
      </div>
      <Button
        on:click={async () => {
          await player.togglePlay();
        }}
        size="icon"
      >
        {#if paused}
          <Icon icon="solar:play-bold" />
        {:else}
          <Icon icon="solar:pause-bold" />
        {/if}
      </Button>
    {/if}
  </div>
</div>

<script lang="ts">
  import { page } from "$app/stores";
  import * as Carousel from "$lib/components/ui/carousel";
  import type { Playlist } from "types/playlist";
  import type { PageData } from "../$types";
  import { spotifyClient } from "$lib/spotify/spotify-client";
  import { Skeleton } from "$lib/components/ui/skeleton";

  // const data = $page.data;
  // let playlists = data.playlists as Playlist;
  const accessToken = $page.data.accessToken;
  const playlists = spotifyClient.getPlaylists({ accessToken, limit: 10 });
</script>

<div>
  <Carousel.Root>
    <Carousel.Content>
      {#await playlists}
        {#each Array.from(Array(10).keys()) as item}
          <Carousel.Item class="basis-1/2 space-y-2">
            <Skeleton class="w-full h-40" />
            <Skeleton class="w-20 h-4" />
          </Carousel.Item>
        {/each}
      {:then data}
        {#each data.items as playlist}
          <Carousel.Item class="basis-1/2 space-y-2">
            <img class="rounded" alt="" src={playlist.images[0].url} />
            <div class="font-medium">{playlist.name}</div>
          </Carousel.Item>
        {/each}
      {/await}
    </Carousel.Content>
  </Carousel.Root>
</div>

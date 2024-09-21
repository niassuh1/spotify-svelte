<script lang="ts">
  import { page } from "$app/stores";
  import type { Categories } from "types/categories";
  import * as Carousel from "$lib/components/ui/carousel";
  import { spotifyClient } from "$lib/spotify/spotify-client";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  let accessToken = $page.data.accessToken;
  let categories = spotifyClient.getCategories({ accessToken, limit: 15 });
</script>

<div>
  <Carousel.Root
    opts={{
      dragFree: false,
    }}
  >
    <Carousel.Content class="h-52">
      {#await categories}
        {#each Array.from(Array(10).keys()) as item}
          <Carousel.Item
            class="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 space-y-2"
          >
            <Skeleton class="w-full h-40" />
          </Carousel.Item>
        {/each}
      {:then categories}
        {#each categories.items as item}
          <Carousel.Item
            class="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 relative overflow-hidden h-full"
          >
            <img
              class="w-full h-full object-cover rounded-lg"
              alt="icon"
              src={item.icons[0].url}
            />
            <div
              class="absolute inset-0 bg-gradient-to-br rounded-lg from-black/50 to-black/10"
            ></div>
            <div class="absolute bottom-0 z-50 p-3">
              <span class="text-lg font-medium">
                {item.name}
              </span>
            </div>
          </Carousel.Item>
        {/each}
      {/await}
    </Carousel.Content>
  </Carousel.Root>
</div>

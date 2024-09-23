<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import CarouselItem from "$lib/components/ui/carousel/carousel-item.svelte";
  import { spotifyClient } from "$lib/spotify/spotify-client";
  import type { SearchType } from "types/search-type";
  import Tracks from "./_components/tracks.svelte";
  let searchTypes: SearchType[] = [
    "track",
    // "album",
    // "artist",
    // "playlist",
    // "audiobook",
    // "episode",
    // "show",
  ];

  let currentSelected: SearchType = "track";
  let query = $page.url.searchParams.get("q") ?? "";

  let searchResult = spotifyClient.search({
    accessToken: $page.data.accessToken,
    limit: 20,
    q: query!,
    type: currentSelected,
  });

  page.subscribe((value) => {
    query = value.url.searchParams.get("q") ?? "";

    searchResult = spotifyClient.search({
      accessToken: $page.data.accessToken,
      limit: 20,
      q: query!,
      type: currentSelected,
    });
  });
</script>

<main class="p-3">
  <Carousel.Root
    class="bg-background/85 backdrop-blur-md sticky top-[60px] py-3"
    opts={{ dragFree: true }}
  >
    <Carousel.Content class="">
      {#each searchTypes as searchType}
        <CarouselItem
          class="flex basis-1/4 sm:basis-1/6 md:basis-[13%] lg:basis-[10%] xl:basis-[8%] "
        >
          <Button
            on:click={() => {
              currentSelected = searchType;
              searchResult = spotifyClient.search({
                accessToken: $page.data.accessToken,
                limit: 20,
                q: query,
                type: currentSelected,
              });
            }}
            class="capitalize w-full"
            size="sm"
            variant={currentSelected === searchType
              ? "outline-primary"
              : "outline"}
            radius="full">{searchType}</Button
          >
        </CarouselItem>
      {/each}
    </Carousel.Content>
  </Carousel.Root>

  {#await searchResult then searchResultData}
    <Tracks track={searchResultData.tracks} />
  {/await}
</main>

<script lang="ts">
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import CarouselItem from "$lib/components/ui/carousel/carousel-item.svelte";
  import { spotifyClient } from "$lib/spotify/spotify-client";
  import type { SearchType } from "types/search-type";
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
    class="bg-background sticky top-[60px] py-3"
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
    {#each searchResultData.tracks.items as data}
      <div class="border-b flex gap-3 p-3">
        <img
          alt={data.album.name}
          class="w-16 h-16 object-cover rounded-md"
          src={data.album.images[0].url}
        />
        <div class="flex flex-col">
          <span
            class="font-semibold text-lg max-w-32 overflow-ellipsis truncate"
          >
            {data.album.name}
          </span>
          <div class="flex items-center gap-1">
            {#if data.explicit}
              <div
                class="flex items-center justify-center rounded bg-muted-foreground w-4 h-4 text-[10px] font-semibold text-background"
              >
                E
              </div>
            {/if}
            <span class="text-sm text-muted-foreground"
              >{data.album.artists[0].name}</span
            >
          </div>
        </div>
      </div>
    {/each}
  {/await}
</main>

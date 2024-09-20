<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Carousel from "$lib/components/ui/carousel";
  import CarouselItem from "$lib/components/ui/carousel/carousel-item.svelte";
  import type { SearchType } from "types/search-type";
  let searchTypes: SearchType[] = [
    "track",
    "album",
    "artist",
    "playlist",
    "audiobook",
    "episode",
    "show",
  ];
</script>

<main class="p-3">
  <Carousel.Root opts={{ dragFree: true }}>
    <Carousel.Content class="gap-3">
      {#each searchTypes as searchType}
        <CarouselItem class="flex basis-1/4 sm:basis-1/6 md:basis-[13%]">
          <Button
            class="capitalize w-full"
            size="sm"
            variant="outline"
            radius="full">{searchType}</Button
          >
        </CarouselItem>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
</main>

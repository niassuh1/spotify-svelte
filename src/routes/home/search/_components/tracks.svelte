<script lang="ts">
  import type { Tracks } from "types/search";

  export let track: Tracks;
</script>

{#each track.items as data}
  <div class="border-b flex gap-3 p-3">
    <img
      alt={data.album.name}
      class="w-16 h-16 object-cover rounded-md"
      src={data.album.images[0].url}
    />
    <div class="flex flex-col">
      <span class="font-semibold text-lg max-w-32 overflow-ellipsis truncate">
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

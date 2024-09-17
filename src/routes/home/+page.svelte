<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import CategoriesList from "./_components/categories-list.svelte";
  import PlaylistList from "./_components/playlist-list.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mx-auto p-3 space-y-6">
  <section class="space-y-3">
    <div class="flex flex-col">
      <span class="text-xs text-muted-foreground font-light"
        >New Music Every Friday!</span
      >
      <span class="text-2xl font-semibold">Trending Now</span>
    </div>
    <CategoriesList />
  </section>
  <section class="space-y-3">
    <div class="flex flex-col">
      <span class="text-2xl font-semibold">Your Playlists</span>
    </div>
    <PlaylistList />
  </section>
</div>

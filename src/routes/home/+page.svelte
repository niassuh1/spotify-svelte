<script lang="ts">
  import CategoriesList from "./_components/categories-list.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mx-auto p-3">
  <section class="space-y-3 h-[200vh]">
    <div class="flex flex-col">
      <span class="text-xs text-muted-foreground font-light"
        >New Music Every Friday!</span
      >
      <span class="text-2xl font-semibold">Trending Now</span>
    </div>
    <CategoriesList />
  </section>
</div>

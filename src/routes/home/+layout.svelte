<script>
  import Header from "./_components/header.svelte";
  import SideNav from "./_components/side-nav.svelte";
</script>

<div class="flex min-h-screen">
  <SideNav />
  <div class="max-h-screen overflow-y-auto flex-1">
    <Header />
    <div class=" w-full mx-auto max-w-screen-2xl">
      <slot />
    </div>
  </div>
</div>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import UserMenu from "./user-menu.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { sideNavOpenWritable } from "$lib/stores/side-nav-store";
  import { page } from "$app/stores";
  import { invalidate } from "$app/navigation";
  let query = $page.url.searchParams.get("q");
</script>

<header class="border-b bg-background/70 backdrop-blur-md z-50 sticky top-0">
  <nav class="flex items-center gap-4 mx-auto w-full max-w-screen-2xl p-3">
    <Button
      on:click={() => {
        sideNavOpenWritable.update((value) => !value);
      }}
      class="text-xl md:hidden aspect-square"
      size="icon"
      variant="ghost"
    >
      <Icon icon="solar:hamburger-menu-broken" />
    </Button>
    <form method="get" action="/home/search" class="relative mr-auto">
      <Icon
        class="absolute top-0 bottom-0 start-3 my-auto w-4 h-4 text-foreground"
        icon="solar:rounded-magnifer-outline"
      />

      <Input value={query} name="q" placeholder="Search Here" class="ps-8" />
    </form>
    <UserMenu />
  </nav>
</header>

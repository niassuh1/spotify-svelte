<script lang="ts">
  import Icon from "@iconify/svelte";
  import UserMenu from "./user-menu.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
</script>

<header class="border-b bg-background/40 backdrop-blur-md z-50 sticky top-0">
  <nav class="flex items-center gap-4 mx-auto w-full max-w-screen-2xl p-3">
    <div class="relative mr-auto">
      <Icon
        class="absolute top-0 bottom-0 start-3 my-auto w-4 h-4 text-white"
        icon="solar:rounded-magnifer-outline"
      />
      <Input placeholder="Search Here" class="ps-8" />
    </div>
    <UserMenu />
  </nav>
</header>

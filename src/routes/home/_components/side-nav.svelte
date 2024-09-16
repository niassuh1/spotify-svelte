<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";
</script>

<aside class="p-3 border-e hidden sm:flex flex-col items-center gap-3">
  <Icon class="text-3xl text-primary" icon="mdi:spotify" />
  <Tooltip.Root openDelay={250}>
    <Tooltip.Trigger>
      <Button variant="secondary" size="icon">
        <Icon icon="solar:home-angle-2-bold" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content transitionConfig={{ x: -4, y: 0 }} side="right"
      >Home</Tooltip.Content
    >
  </Tooltip.Root>
  <Tooltip.Root openDelay={250}>
    <Tooltip.Trigger>
      <Button variant="ghost" size="icon">
        <Icon icon="solar:music-library-2-linear" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content transitionConfig={{ x: -4, y: 0 }} side="right"
      >My Library</Tooltip.Content
    >
  </Tooltip.Root>
  <Tooltip.Root openDelay={250}>
    <Tooltip.Trigger>
      <Button variant="ghost" size="icon">
        <Icon icon="solar:card-search-linear" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content transitionConfig={{ x: -4, y: 0 }} side="right"
      >Browse</Tooltip.Content
    >
  </Tooltip.Root>
</aside>

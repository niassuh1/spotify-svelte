<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Content } from "$lib/components/ui/card";
  import * as Drawer from "$lib/components/ui/drawer";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { sideNavOpenWritable } from "$lib/stores/side-nav-store";
  import Icon from "@iconify/svelte";
  import { onDestroy } from "svelte";
  import { get } from "svelte/store";
  import { slide } from "svelte/transition";
  import { mediaQuery } from "svelte-legos";

  let isSideNavOpen = get(sideNavOpenWritable);
  const sideNavSubcribe = sideNavOpenWritable.subscribe((value) => {
    isSideNavOpen = value;
  });
  onDestroy(sideNavSubcribe);

  const isMobile = mediaQuery("(max-width: 768px)");

  const navList = [
    {
      title: "Home",
      icon: "solar:home-angle-2-bold",
      href: "/home",
    },
    {
      title: "My Library",
      icon: "solar:music-library-2-linear",
      href: "/library",
    },
    {
      title: "Browse",
      icon: "solar:card-search-linear",
      href: "/browse",
    },
  ];

  let route = $page.route.id;
</script>

<aside class="p-3 border-e hidden md:flex flex-col items-center gap-3">
  <Icon class="text-3xl text-primary" icon="mdi:spotify" />
  {#each navList as navItem}
    <Tooltip.Root openDelay={250}>
      <Tooltip.Trigger>
        <Button
          variant={route == navItem.href ? "secondary" : "ghost"}
          size="icon"
        >
          <Icon icon={navItem.icon} />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content transitionConfig={{ x: -4, y: 0 }} side="right"
        >{navItem.title}</Tooltip.Content
      >
    </Tooltip.Root>
  {/each}
</aside>
{#if $isMobile}
  <Drawer.Root
    direction="left"
    onClose={() => {
      // Timeout for the animation
      setTimeout(() => {
        sideNavOpenWritable.update(() => false);
      }, 200);
    }}
    open={isSideNavOpen}
  >
    <Drawer.Portal>
      <Drawer.Content class="p-3 flex flex-col gap-3  w-64">
        {#each navList as navItem}
          <Button
            class="justify-start items-center gap-2"
            variant={route == navItem.href ? "secondary" : "ghost"}
          >
            <Icon icon={navItem.icon} />
            <span>{navItem.title}</span>
          </Button>
        {/each}
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
{/if}

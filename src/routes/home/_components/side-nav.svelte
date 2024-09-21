<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/ui/button/button.svelte";

  import * as Drawer from "$lib/components/ui/drawer";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { sideNavOpenWritable } from "$lib/stores/side-nav-store";
  import Icon from "@iconify/svelte";
  import { onDestroy, onMount } from "svelte";
  import { get } from "svelte/store";

  import { mediaQuery } from "svelte-legos";

  let isSideNavOpen = get(sideNavOpenWritable);
  const sideNavSubcribe = sideNavOpenWritable.subscribe((value) => {
    isSideNavOpen = value;
  });

  const isMobile = mediaQuery("(max-width: 768px)");

  const navList = [
    {
      title: "Home",
      activeIcon: "solar:home-angle-2-bold",
      inactiveIcon: "solar:home-angle-2-linear",
      href: "/home",
    },
    {
      title: "My Library",
      activeIcon: "solar:music-library-2-bold",
      inactiveIcon: "solar:music-library-2-linear",

      href: "/home/library",
    },
    {
      title: "Browse",
      activeIcon: "solar:card-search-bold",
      inactiveIcon: "solar:card-search-linear",
      href: "/home/browse",
    },
  ];

  $: routeId = $page.route.id;
</script>

<aside class="p-3 border-e hidden md:flex flex-col items-center gap-3">
  <Icon class="text-3xl text-primary" icon="mdi:spotify" />
  {#each navList as navItem}
    {#key navItem}
      <Tooltip.Root openDelay={250}>
        <Tooltip.Trigger>
          <a href={navItem.href}>
            <Button
              variant={routeId == navItem.href ? "secondary" : "ghost"}
              size="icon"
            >
              <Icon
                icon={routeId == navItem.href
                  ? navItem.activeIcon
                  : navItem.inactiveIcon}
              />
            </Button>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content transitionConfig={{ x: -4, y: 0 }} side="right"
          >{navItem.title}</Tooltip.Content
        >
      </Tooltip.Root>
    {/key}
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
          <a class="w-full" href={navItem.href}>
            <Drawer.Close asChild let:builder>
              <Button
                builders={[builder]}
                class="justify-start items-center gap-2 w-full"
                variant={routeId == navItem.href ? "secondary" : "ghost"}
              >
                <Icon
                  icon={routeId == navItem.href
                    ? navItem.activeIcon
                    : navItem.inactiveIcon}
                />
                <span>{navItem.title}</span>
              </Button>
            </Drawer.Close>
          </a>
        {/each}
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
{/if}

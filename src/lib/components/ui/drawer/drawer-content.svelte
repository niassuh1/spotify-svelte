<script lang="ts">
  import { Drawer as DrawerPrimitive } from "vaul-svelte";
  import DrawerOverlay from "./drawer-overlay.svelte";
  import { cn } from "$lib/utils.js";

  type $$Props = DrawerPrimitive.ContentProps;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<DrawerPrimitive.Portal>
  <DrawerOverlay />
  <DrawerPrimitive.Content
    class={cn(
      "bg-background fixed inset-x-0 top-0 z-50 flex h-full flex-col rounded-t-[10px] border",
      className
    )}
    {...$$restProps}
  >
    <slot />
  </DrawerPrimitive.Content>
</DrawerPrimitive.Portal>

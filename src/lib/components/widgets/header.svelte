<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { UserDetails } from "../../../types/user-details";
  import * as Avatar from "$lib/components/ui/avatar";

  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { page } from "$app/stores";
  import Button from "../ui/button/button.svelte";

  let user = $page.data.user as UserDetails;
</script>

<header class="border-b">
  <nav class="flex items-center mx-auto w-full max-w-screen-xl p-3">
    <Icon class="text-3xl text-primary" icon="mdi:spotify" />
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="ml-auto">
        <Avatar.Root class="w-8 h-8">
          <Avatar.Image src={user?.images[0].url} />
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label class="flex flex-col font-normal">
          <span class="text-sm">{user?.display_name}</span>
          <span class="text-xs text-muted-foreground">@{user?.id}</span>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <form action="?/logout" method="POST">
            <DropdownMenu.Item asChild>
              <Button
                variant="ghost"
                class="flex items-center justify-start gap-1 w-full"
                type="submit"
              >
                <Icon icon="solar:logout-3-broken" />
                <span>Logout</span>
              </Button>
            </DropdownMenu.Item>
          </form>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </nav>
</header>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import * as Avatar from "$lib/components/ui/avatar";

  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { page } from "$app/stores";
  import Button from "../../../lib/components/ui/button/button.svelte";
  import { spotifyClient } from "$lib/spotify/spotify-client";
  import { Skeleton } from "$lib/components/ui/skeleton";

  let accessToken = $page.data.accessToken;
  let user = spotifyClient.getCurrentUserProfile({ accessToken });
</script>

{#await user}
  <Skeleton class="w-8 h-8 rounded-full" />
{:then user}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
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
{/await}

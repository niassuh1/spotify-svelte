<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Login | Spotify Clone</title>
</svelte:head>

<main class="w-full min-h-screen flex items-center justify-center">
  <Card.Root>
    <Card.Header class="flex items-center">
      <Icon class="text-9xl text-primary" icon="mdi:spotify" />
      <div class="text-sm font-semibold">Spotify Clone</div>
      <div class="text-muted-foreground">Login to continue</div>
    </Card.Header>
    <Card.Content>
      <form method="POST" action="/login">
        <Button type="submit" size="lg" variant="secondary"
          >Sign in With Spotify</Button
        >
      </form>
    </Card.Content>
  </Card.Root>
</main>

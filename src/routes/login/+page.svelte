<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import Spotlight from "$lib/components/ui/Spotlight.svelte";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Login | Spotify Clone</title>
</svelte:head>

<main class="w-full min-h-screen flex items-center justify-center">
  <!-- <Card.Root>
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
  </Card.Root> -->
  <Spotlight fill="#22c55e" />
  <div class="flex flex-col gap-3">
    <h1 class="text-4xl font-semibold text-center">Spotify Clone</h1>
    <span class="text-sm text-muted-foreground text-center"
      >Login to your account to get started</span
    >
    <form class="w-full" method="post" action="/login">
      <Button type="submit" class="w-full" size="lg"
        >Sign in with Spotify</Button
      >
    </form>
  </div>
</main>

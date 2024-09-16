<script>
  import Header from "$lib/components/widgets/header.svelte";
  import "../app.css";
</script>

<div>
  <Header />
  <div class=" w-full mx-auto max-w-screen-xl">
    <slot />
  </div>
</div>

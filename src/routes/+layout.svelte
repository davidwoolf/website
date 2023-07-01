<script lang="ts">
  import "../app.css";
</script>

<header class="flex items-center h-16 md:h-20 px-6 md:px-16 justify-between bg-white">
  <span class="font-semibold text-lg">David Woolf</span>

  <nav class="flex items-center gap-8">
    <!-- <a class="border-b" href="https://github.com/davidwoolf" target="_blank">articles</a> -->

    <a class="border-b" href="https://github.com/davidwoolf" target="_blank">github</a>
  </nav>
</header>

<slot />

<footer
  class="py-12 flex flex-col justify-center text-center align-center text-xs opacity-50 leading-loose">
  <span>Made in San Diego</span>
  <span
    >Built with <a href="http://svelte.dev/" class="hover:underline">Svelte</a> | Hosted
    on
    <a href="http://vercel.com/" class="hover:underline">Vercel</a></span>
</footer>

<style lang="postcss">
  :global(body) {
    -webkit-font-smoothing: antialiased;
  }

  .page-container {
    min-height: calc(100vh - 5rem);
  }
</style>

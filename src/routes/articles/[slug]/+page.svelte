<script lang="ts">
  import Container from "@components/layout/container.svelte";
  import type { PageData } from "../[slug]/$types";
  export let data: PageData;
</script>

<Container>
  <article class="prose">
    {@html data.post}
  </article>
</Container>

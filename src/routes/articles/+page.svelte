<script lang="ts">
  import Container from "@components/layout/container.svelte";
  import Heading1 from "@components/text/heading1.svelte";
  import type { PageData } from "./$types";
  import Heading2 from "@components/text/heading2.svelte";
  export let data: PageData;
</script>

<Container>
  <Heading1>Articles</Heading1>

  <div class=" divide-y">
    {#each data.items as article}
      <article class="py-8">
        <Heading2>
          {article?.title}
        </Heading2>

        <p class="font-medium opacity-60">
          {article?.excerpt}
        </p>

        <a
          href="/articles/{article?.slug}"
          class="mt-4 font-semibold border-b inline-block pb-0-5 border-b-black-900"
          >Read more</a>
      </article>
    {/each}
  </div>
</Container>

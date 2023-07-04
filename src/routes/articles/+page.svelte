<script lang="ts">
  import Container from "@components/layout/container.svelte";
  import Heading1 from "@components/text/heading1.svelte";
  import type { PageData } from "./$types";
  import Heading2 from "@components/text/heading2.svelte";
  import Link from "@components/layout/link.svelte";
  export let data: PageData;
</script>

<Container>
  <Heading1>Articles</Heading1>

  <div class=" divide-y">
    {#each data.items as article (article.slug)}
      <article class="py-8">
        <Heading2>
          <a class="hover:underline" href="/articles/{article?.slug}">
            {article?.title}
          </a>
        </Heading2>

        <p class="font-medium opacity-60 pt-1-5">
          {article?.excerpt}
        </p>

        <div class="mt-4">
          <Link href="/articles/{article?.slug}">Read more</Link>
        </div>
      </article>
    {/each}
  </div>
</Container>

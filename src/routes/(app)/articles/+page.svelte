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

        <p class="font-regular opacity-60 text-base pt-2">
          {article?.excerpt}
        </p>

        <div class="flex items-center mt-4">
          <Link href="/articles/{article?.slug}">Read more</Link>

          <ul class="flex items-center ml-auto gap-2">
            {#each article?.tags as tag, index (index)}
              <li
                class="tag text-emerald-800 bg-orange-50 rounded-md p-1 px-2 text-xs font-medium">
                {tag}
              </li>
            {/each}
          </ul>
        </div>
      </article>
    {/each}
  </div>
</Container>

<svelte:head>
  <title>Articles — David Woolf</title>
</svelte:head>

<style>
  .tag {
    background: linear-gradient(
      180deg,
      rgba(16, 185, 129, 0.07) 0%,
      rgba(16, 185, 129, 0.15) 100%
    );
  }
</style>

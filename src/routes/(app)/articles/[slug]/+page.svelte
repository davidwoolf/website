<script lang="ts">
  import Container from "@components/layout/container.svelte";
  import type { PageData } from "../[slug]/$types";
  export let data: PageData;
</script>

<Container>
  <article
    class="
    prose
    max-w-none
    
    prose-h1:m-0
    prose-h1:text-xl
    prose-h1:md:text-2xl
    prose-h1:font-bold
    prose-h1:tracking-tight

    prose-h2:m-0
    prose-h2:pt-8
    prose-h2:text-lg
    prose-h2:md:text-xl
    prose-h2:font-semibold
    prose-h2:tracking-snug

    prose-h3:m-0
    prose-h3:pt-4
    prose-h3:text-base
    prose-h3:md:text-lg

    prose-h4:m-0
    prose-h4:-mb-3
    prose-h4:pt-4
    prose-h4:font-semibold
    prose-h4:text-base
    prose-h4:md:text-base

    prose-p:m-0
    prose-p:pt-4
    prose-p:text-base
    prose-p:text-gray-900
    prose-p:text-opacity-70
    prose-p:leading-normal

    prose-a:text-opacity-100

    prose-ul:m-0
    prose-ul:pt-3
    
    prose-li:m-0
    prose-li:pt-1
    prose-li:text-base
    prose-li:text-gray-900
    prose-li:text-opacity-70
    prose-li:leading-normal

    prose-pre:bg-white
    prose-pre:border
    prose-pre:border-slate-200
    prose-pre:rounded-lg
    prose-pre:font-medium
    prose-pre:m-0
    prose-pre:max-w-full
    prose-pre:mb-2
    prose-pre:md:text-sm
    prose-pre:mt-6
    prose-pre:overflow-scroll
    prose-pre:shadow-sm
    prose-pre:text-gray-900
    prose-pre:text-sm
    prose-pre:w-full

    prose-table:mb-0
    prose-table:mt-4

    prose-figure:m-0
    prose-figure:pt-6
    prose-figure:pb-2

    prose-hr:mt-8
    prose-hr:mb-0
  ">
    {@html data.post}

    {#if data.references.length}
      <hr />

      <h2>References</h2>

      <ul>
        {#each data.references as reference}
          <li>
            <a href={reference} target="_blank">{reference}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </article>
</Container>

<svelte:head>
  <title>{data.title} — David Woolf</title>
  <meta name="description" content={data.excerpt} />
</svelte:head>

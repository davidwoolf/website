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
   

    prose-p:m-0
    prose-p:pt-4
    prose-p:text-base
    prose-p:md:text-lg
    prose-p:text-gray-900
    prose-p:text-opacity-70
    prose-p:leading-normal

    prose-a:text-opacity-100
    
    prose-li:text-base
    prose-li:md:text-lg
    prose-li:text-gray-900
    prose-li:text-opacity-70
    prose-li:leading-normal

    prose-pre:shadow-sm
    prose-pre:font-medium
    prose-pre:m-0
    prose-pre:mb-2
    prose-pre:md:text-base
    prose-pre:mt-6
    prose-pre:max-w-full
    prose-pre:text-gray-900
    
    prose-pre:text-sm
    prose-pre:w-full
    prose-pre:overflow-scroll
  ">
    {@html data.post}
  </article>
</Container>

<!-- <style lang="postcss">
  :global(.hljs-keyword) {
    opacity: 0.7;
  }

  :global(.hljs-string) {

  }
</style> -->

<script lang="ts">
  import { assets } from "$app/paths";
  import Heading1 from "@components/text/heading1.svelte";
  import Image from "@components/home/image.svelte";
  import History from "@components/home/history.svelte";
</script>

<div class="p-6 md:py-24 md:px-16">
  <div class="pb-48 pt-12 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
    <div class="text-center lg:text-left">
      <Heading1>
        Software engineer
        <span class="align-middle text-lg font-normal px-1 opacity-20">|</span> web
      </Heading1>

      <p class="pt-2 text-base md:text-lg font-regular text-gray-900/60 max-w-lg">
        I'm David Woolf, a front-end software engineer, building products professionally
        for over 10 years. Currently living in San Diego, California with
        my&nbsp;dog&nbsp;Luka.
      </p>
    </div>

    <div
      class="origin-top scale-50 translate-y-8 md:origin-center md:scale-75 md:-translate-y-16 lg:translate-y-0 xl:scale-100 grid grid-cols-1 grid-rows-1 place-items-center group">
      <Image
        classes="
          w-48
          translate-x-32
          translate-y-0
          group-hover:translate-x-48
          group-hover:-translate-y-12
          group-hover:scale-110
        "
        src="{assets}/luka-2.jpeg"
        alt="Luka in nature" />

      <Image
        classes="
          w-40
          transform
          -translate-x-2
          translate-y-24
          group-hover:-translate-x-6 
          group-hover:translate-y-32
          group-hover:scale-110
        "
        src="{assets}/luka.jpeg"
        alt="My dog Luka" />

      <Image
        classes=" 
          w-56
          transform
          -translate-x-32
          -translate-y-12
          group-hover:-translate-x-56
          group-hover:-translate-y-20
          group-hover:scale-90
        "
        src="{assets}/profile.jpeg"
        alt="David Woolf" />
    </div>
  </div>

  <!-- <History /> -->
</div>

<svelte:head>
  <title>David Woolf — Front-end software engineer</title>
  <meta
    name="description"
    content="I'm David Woolf, a front-end software engineer, building products professionally for
  over 10 years" />
</svelte:head>

<style lang="postcss">
  .page-container {
    min-height: calc(100vh - 13rem);
  }

  @media (min-width: 768px) {
    .page-container {
      min-height: calc(100vh - 14rem);
    }
  }
</style>

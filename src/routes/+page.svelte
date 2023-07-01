<script lang="ts">
  import { assets } from "$app/paths";
  import Image from "@components/home/image.svelte";
</script>

<div
  class="page-container p-6 md:py-24 md:px-16 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
  <div class="text-center lg:text-left">
    <h1 class="text-xl md:text-2xl font-bold tracking-tight">
      Software engineer
      <span class="align-middle text-lg font-normal px-1 opacity-20">|</span> web
    </h1>

    <p class="pt-2 text-base md:text-lg font-medium opacity-50 max-w-md">
      I'm David Woolf, a front-end software engineer, building products professionally for
      over 10 years. Living in San Diego, California with my dog Luka.
    </p>
  </div>

  <div
    class="scale-50 -translate-y-8 md:scale-75 md:-translate-y-16 lg:translate-y-0 xl:scale-100 grid grid-cols-1 grid-rows-1 place-items-center group">
    <Image
      classes="
        w-48
        translate-x-32
        translate-y-0
        group-hover:translate-x-48
        group-hover:-translate-y-12
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
      "
      src="{assets}/profile.jpeg"
      alt="David Woolf" />
  </div>
</div>

<style lang="postcss">
  .page-container {
    min-height: calc(100vh - 12rem);
  }

  @media (min-width: 768px) {
    .page-container {
      min-height: calc(100vh - 14rem);
    }
  }
</style>

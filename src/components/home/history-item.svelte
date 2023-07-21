<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<!-- <div class="grid grid-cols-[0.25rem_1fr] gap-4"> -->
<div>
  <!-- <div class="flex flex-col gap-1 -mt-2">
    <div class="w-1 h-1 rounded-full bg-emerald-900 opacity-30" />

    <div class="rounded-full bg-emerald-900 flex-1 opacity-10" />
  </div> -->

  <div class="container rounded-xl">
    <div class="p-6 rounded-xl h-48">
      <div class="flex justify-between items-center">
        <h2 class="text-gray-900 text-base md:text-lg font-semibold tracking-snug">
          {title}
        </h2>

        <h3 class="text-xs opacity-60 text-emerald-900">{subtitle}</h3>
      </div>

      <div class="text-gray-900 text-opacity-80 text-sm leading-relaxed pt-2">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    background: linear-gradient(
      160deg,
      rgba(30, 41, 59, 0) 0%,
      rgba(30, 41, 59, 0.08) 120%
    );
  }
</style>

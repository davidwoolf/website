<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="font-semibold border-b inline-block pb-0-5 transition-all duration-200 border-b-black-900 hover:text-emerald-700">
  <slot />
</a>

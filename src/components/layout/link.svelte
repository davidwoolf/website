<script lang="ts">
  export let href: string;
</script>

<a {href} class="font-semibold border-b inline-block pb-0-5 border-b-black-900">
  <slot />
</a>

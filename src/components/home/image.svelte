<script lang="ts">
  export let src: string;
  export let alt: string;
  export let classes: string = "";
</script>

<img
  class="
    col-start-1
    row-start-1
    col-span-1
    row-span-1
    rounded-3xl
    shadow-xl
    transition-transform
    duration-500

    {classes}
  "
  {src}
  {alt} />

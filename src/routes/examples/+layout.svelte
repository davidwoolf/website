<script lang="ts">
  import "../../app.css";
</script>

<div
  class="
    h-screen
    relative
    w-screen
  ">
  <div
    class="bg-teal-700 bg-gradient-to-tl from-teal-950 opacity-10 inset-0 absolute z-0"
    aria-hidden="true" />

  <div class="relative z-10">
    <slot />
  </div>
</div>

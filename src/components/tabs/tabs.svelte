<script lang="ts">
  import { createTabs } from "@melt-ui/svelte";

  const {
    elements: { root, list, content, trigger },
  } = createTabs({
    defaultValue: "tab-preview",
  });

  const triggers = [
    { id: "tab-preview", title: "Preview" },
    { id: "tab-html", title: "HTML" },
    { id: "tab-css", title: "CSS" },
  ];
</script>

<div {...$root} use:root class="overflow-hidden flex flex-col h-screen">
  <div {...$list} use:list class="flex shrink-0 overflow-x-auto">
    {#each triggers as triggerItem}
      <button
        {...$trigger(triggerItem.id)}
        use:trigger
        class="
          trigger
          h-12
          font-medium
          px-4
          text-sm
          text-gray-800
          select-none
          transition-transform
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-teal-950
          focus-visible:ring-opacity-30
          focus-visible:-translate-y-0.5
          
        ">
        {triggerItem.title}
      </button>
    {/each}

    <div aria-hidden="true" class="flex-1 bg-teal-950 bg-opacity-10 h-12" />
  </div>

  <div
    {...$content("tab-preview")}
    use:content
    class="
    tab-content
    content-center
    grid
    grow
    place-items-center
    w-screen
  ">
    <slot name="preview" />
  </div>
  <div
    {...$content("tab-html")}
    use:content
    class="
    tab-content

    grow
  ">
    <slot name="html" />
  </div>
  <div
    {...$content("tab-css")}
    use:content
    class="
    tab-content
    grow
  ">
    <slot name="css" />
  </div>
</div>

<style lang="postcss">
  .trigger[data-state="inactive"] {
    @apply bg-teal-950 bg-opacity-10;
  }

  .tab-content[hidden] {
    @apply hidden;
  }
</style>

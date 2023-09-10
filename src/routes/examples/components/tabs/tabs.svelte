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

<div {...$root} use:root class="tabs__container">
  <div {...$list} use:list class="tabs__navigation">
    {#each triggers as triggerItem}
      <button
        {...$trigger(triggerItem.id)}
        use:trigger
        class="
          tabs__trigger
        ">
        {triggerItem.title}
      </button>
    {/each}

    <div aria-hidden="true" class="tabs__navigation--bg" />
  </div>

  <div
    {...$content("tab-preview")}
    use:content
    class="tabs__content tabs__content--preview">
    <slot name="preview" />
  </div>
  <div {...$content("tab-html")} use:content class="tabs__content">
    <slot name="html" />
  </div>
  <div {...$content("tab-css")} use:content class="tabs__content">
    <slot name="css" />
  </div>
</div>

<style>
  .tabs__container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .tabs__navigation {
    display: flex;
    flex: 0 0 3rem;
    overflow-x: auto;
  }

  .tabs__navigation--bg {
    background-color: rgb(4 47 46 / 0.1);
    flex: 1 1 0%;
    height: 3rem;
  }

  .tabs__trigger {
    all: unset;
    color: rgb(31 41 55);
    font-size: 0.875rem;
    font-weight: 500;
    height: 3rem;
    padding: 0 1rem;
    transition: transform 0.15s ease;
    user-select: none;
  }

  .tabs__trigger:focus-visible {
    transform: translateY(-0.125rem);
  }

  .tabs__trigger[data-state="inactive"] {
    background-color: rgb(4 47 46 / 0.1);
  }

  .tabs__content {
    flex: 1 1 auto;
    max-height: calc(100% - 3rem);
  }

  .tabs__content[hidden] {
    display: none;
  }

  .tabs__content--preview {
    align-content: center;
    display: grid;
    place-items: center;
    width: 100%;
  }
</style>

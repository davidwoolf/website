<script lang="ts">
  import { createTabs } from "@melt-ui/svelte";
  export let tabs = ["preview", "html", "css"];

  const {
    elements: { root, list, content, trigger },
  } = createTabs({
    defaultValue: "tab-preview",
  });

  function getTabName(tab: string) {
    switch (tab) {
      case "preview":
        return "Preview";
      case "html":
        return "HTML";
      case "css":
        return "CSS";

      default:
        return "";
    }
  }

  const triggers = tabs.map((tab) => ({
    id: `tab-${tab}`,
    title: getTabName(tab),
  }));
</script>

<div {...$root} use:root class="tabs__container">
  <nav {...$list} use:list class="tabs__navigation">
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
  </nav>

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
    align-items: center;
    background-color: rgb(4 47 46 / 0.1);
    display: flex;
    flex: 0 0 3rem;
    height: 3rem;
    overflow-x: auto;
    padding: 0 0.5rem;
  }

  .tabs__trigger {
    all: unset;
    color: rgb(31 41 55);
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0 1rem;
    outline: revert;
    user-select: none;
  }

  .tabs__trigger[data-state="active"] {
    background-color: rgb(255 255 255);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
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

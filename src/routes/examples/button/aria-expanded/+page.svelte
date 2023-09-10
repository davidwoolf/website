<script lang="ts">
  import { createDialog } from "@melt-ui/svelte";
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";

  const {
    elements: { trigger, overlay, content, title, description, close, portalled },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });
</script>

<Tabs tabs={["preview", "html", "css"]}>
  <div slot="preview">
    <button {...$trigger} use:trigger class="open-dialog">open dialog</button>

    <div {...$portalled} use:portalled>
      {#if $open}
        <div {...$overlay} use:overlay class="overlay" />
        <div {...$content} use:content class="content">
          <button {...$close} use:close class="close-dialog" aria-label="close dialog">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd" /></svg>
          </button>

          <h2 {...$title} use:title class="title">Dialog title</h2>
          <p {...$description} use:description class="description">Dialog description</p>
        </div>
      {/if}
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div>
  <button type="button" aria-haspopup="dialog" aria-controls="popup-id" aria-expanded="false">open dialog</button>
  <div id="popup-id">
    <!-- popup content goes here -->
  </div>
</div>`} />
  </div>

  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`button {
  all: unset;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0 1rem;
  outline: revert;
}`} />
  </div>
</Tabs>

<style>
  .open-dialog {
    all: unset;
    background: white;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0 1rem;
    outline: revert;
  }

  .content {
    background: white;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    min-height: 8rem;
    padding: 2rem;
    position: fixed;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    max-width: 24rem;
    width: 80vw;
    z-index: 60;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  .description {
    margin: 0.5rem 0 0;
    opacity: 0.6;
  }

  .close-dialog {
    all: unset;
    outline: revert;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .overlay {
    background: rgb(255 255 255 / 0.8);
    inset: 0;
    position: fixed;
    z-index: 50;
  }
</style>

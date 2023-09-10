<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs tabs={["preview", "html"]}>
  <div slot="preview">
    <div role="button" tabindex="0">click me (a div)</div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div role="button" tabindex="0">click me (a div)</div>`} />
  </div>
</Tabs>

<style>
  .preview__content p {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0.25rem 0;
  }

  .preview__content hr {
    border: 1px solid #ddd;
    border-top: none;
    height: 1px;
  }

  .preview__content p span {
    font-size: 0.75rem;
    opacity: 0.6;
  }

  .button__unset {
    all: unset;
    outline: revert;
  }

  .button__appearance-none {
    appearance: none;
  }

  .button__manually-reset {
    background: none;
    border: none;
    padding: 0;
  }
</style>

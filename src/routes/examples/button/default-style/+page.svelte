<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview">
    <div class="preview__content">
      <p>
        <button>click me</button>
        <span>baseline styles</span>
      </p>
      <hr />

      <p>
        <button class="button__unset">click me</button>
        <span>all set to "unset"</span>
      </p>

      <hr />

      <p>
        <button class="button__appearance-none">click me</button>
        <span>appearance set to "none"</span>
      </p>
      <hr />

      <p>
        <button class="button__manually-reset">click me</button>
        <span>individual properties reset</span>
      </p>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<button>click me</button>
<button class="unset">click me</button>
<button class="appearance--none">click me</button>
<button class="manually--reset">click me</button>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.unset {
  all: unset;
  outline: revert; /* keep this for keyboard focus */
}

.appearance--none {
  appearance: none;
}

.manually--reset {
  background: none;
  border: none;
  padding: 0;
}
`} />
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

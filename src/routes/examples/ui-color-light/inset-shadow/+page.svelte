<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <button class="button">hello world</button>
  </div>

  <div slot="html" class="tab__code">
    <Code language="html" code={`<button class="button">hello world</button>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.button {
  all: unset;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.2);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0 1rem;
  outline: revert;
}
    `} />
  </div>
</Tabs>

<style>
  .button {
    all: unset;
    background: white;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.2);
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0 1rem;
    outline: revert;
  }
</style>

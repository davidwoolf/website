<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";

  let pressed = false;
</script>

<Tabs tabs={["preview", "html", "css"]}>
  <div slot="preview">
    <button
      type="button"
      aria-pressed={pressed}
      on:click={() => {
        pressed = !pressed;
      }}>{pressed ? "untoggle me" : "toggle me"}</button>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<button type="button" aria-pressed="false">toggle me</button>`} />
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
}

button[aria-pressed="true"] {
  background: #f6f6f6;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.1);
}`} />
  </div>
</Tabs>

<style>
  button {
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

  button[aria-pressed="true"] {
    background: #f6f6f6;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 0.1);
  }
</style>

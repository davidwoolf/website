<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview">
    <button>click me</button>
    <button class="button__unset">click me</button>
    <button class="button__appearance-none">click me</button>
    <button class="button__manually-reset">click me</button>
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
  .button__unset {
    all: unset;
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

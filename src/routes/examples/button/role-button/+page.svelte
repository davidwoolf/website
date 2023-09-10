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

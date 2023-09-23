<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <p>I am text with a unitless <br />line-height value of 1.5</p>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<p>I am text with a unitless <br />line-height value of 1.5</p>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    padding: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
  }
</style>

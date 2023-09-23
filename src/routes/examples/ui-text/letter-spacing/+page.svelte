<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <p class="tracking-normal">I am text with tracking set at "normal"</p>

    <p class="tracking-loose">I am text with tracking set at 0.025em</p>

    <p class="tracking-wide">I am text with tracking set at 0.075em</p>

    <p class="tracking-snug">I am text with tracking set at -0.0125em</p>

    <p class="tracking-tight">I am text with tracking set at -0.025em</p>
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
  }

  .tracking-normal {
    letter-spacing: normal;
  }

  .tracking-loose {
    letter-spacing: 0.025em;
  }

  .tracking-wide {
    letter-spacing: 0.075em;
  }

  .tracking-snug {
    letter-spacing: -0.0125em;
  }

  .tracking-tight {
    letter-spacing: -0.025em;
  }
</style>

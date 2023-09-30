<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <p>
      I am the main body of text, set at 1rem <br />
      <span>I am less important text, set at .75em</span>
    </p>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<p>
  I am the main body of text, set at 1rem <br />
  <span>I am less important text, set at .75em</span>
</p>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`p {
  font-size: 1rem;
}

/* max will always take the biggest value from a list of options */
span {
  font-size: max(0.625rem, 0.75em);
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    padding: 2rem;
    width: 100%;
  }

  p {
    color: rgb(55 65 81 / 0.8);
    font-size: 1rem;
  }

  /* max will always take the biggest value from a list of options */
  span {
    font-size: max(0.625rem, 0.75em);
  }
</style>

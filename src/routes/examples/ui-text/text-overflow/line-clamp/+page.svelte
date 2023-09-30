<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="container">
      <p>
        Using line clamps provides more flexibility with text overflow but isn't based on
        the container height
      </p>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="container">
  <p>Using line clamps provides more flexibility with text overflow but isn't based on the container height</p>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.container {
  border: 1px solid rgb(19 78 74 / 0.5);
  flex: none;
  padding: 0.25rem;
  width: 8rem;
}

p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  margin: 0;
  overflow: hidden;
  width: 100%;

  /* line clamp specific requirements */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
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

  .container {
    border: 1px solid rgb(19 78 74 / 0.5);
    flex: none;
    padding: 0.25rem;
    width: 8rem;
  }

  p {
    color: rgb(55 65 81 / 0.8);
    font-size: 0.75rem;
    margin: 0;
    overflow: hidden;
    width: 100%;

    /* line clamp specific requirements */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>

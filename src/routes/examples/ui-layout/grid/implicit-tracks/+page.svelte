<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="grid">
      <div><p>column 1<br />row 1</p></div>

      <div><p>column 2<br />row 1</p></div>

      <div><p>column 3<br />row 1</p></div>

      <div><p>column 1<br />row 2</p></div>

      <div><p>column 2<br />row 2</p></div>

      <div><p>column 3<br />row 2</p></div>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="grid">
<div><p>column 1<br />row 1</p></div>

<div><p>column 2<br />row 1</p></div>

<div><p>column 3<br />row 1</p></div>

<div><p>column 1<br />row 2</p></div>

<div><p>column 2<br />row 2</p></div>

<div><p>column 3<br />row 2</p></div>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.grid div {
  background-color: rgb(19 78 74 / 0.1);
  padding: 1rem;
}

.grid p {
  color: rgb(55 65 81);
  margin: 0;
  font-size: 0.75rem;
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    padding: 1rem;
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }

  .grid div {
    background-color: rgb(19 78 74 / 0.1);
    padding: 1rem;
  }

  .grid p {
    color: rgb(55 65 81);
    margin: 0;
    font-size: 0.75rem;
  }
</style>

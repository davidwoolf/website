<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="grid">
      <header />
      <aside />
      <section />
      <footer />

      <div />
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code language="html" code={``} />
  </div>
  <div slot="css" class="tab__code">
    <Code language="css" code={``} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    width: 100%;
  }

  .grid {
    border: 1px solid red;
    display: grid;
    height: 24rem;
    grid-template-columns: [column-1] 6rem [column-2] 1fr [column-3] 6rem;
    grid-template-rows: [row-1] 6rem [row-2] 1fr [row-3] 6rem;
    /* we now have a sidebar area as well */
    /* grid-template-areas:
      "header header header header header header"
      "sidebar sidebar body body body body"
      "footer footer footer footer footer footer"; */
    margin: 0 auto;
    width: 24rem;
  }

  .grid header {
    background-color: red;
    grid-row: row-1;
    grid-column: column-1 / column-3-end;
  }
  .grid aside {
    background-color: blue;
    grid-area: sidebar;
  }

  .grid section {
    background-color: darkred;
    grid-area: body;
  }
  .grid footer {
    background-color: darkblue;
    grid-area: footer;
  }

  .grid div {
    grid-row: header-start / footer-start;
    grid-column: body-start / body-end;
    background-color: rgb(0 255 0 / 0.5);
  }
</style>

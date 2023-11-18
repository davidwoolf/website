<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="container">
      <header class="header">
        <p>header</p>
      </header>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>

      <div class="box">
        <p>row item</p>
      </div>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<header class="header">
  <p>header</p>
</header>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>

<div class="box">
  <p>row item</p>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.box,
.header {
  align-items: center;
  background-color: white;
  border-bottom: 1px solid rgb(19 78 74 / 0.1);
  color: rgb(55 65 81);
  display: flex;
  font-size: 0.75rem;
  justify-content: center;
}

.header {
  background-color: rgb(255 255 255 / .5);
  font-weight: 500;
  position: sticky;
  top: 0;
  z-index: 10;

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    width: 100%;
  }

  .box,
  .header {
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgb(19 78 74 / 0.1);
    color: rgb(55 65 81);
    display: flex;
    font-size: 0.75rem;
    justify-content: center;
  }

  .header {
    background-color: rgb(255 255 255 / .5);
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 10;

    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
</style>

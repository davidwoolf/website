<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="container">
      <div class="box sticky">
        <p>sticky header</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>

      <div class="box">
        <p>item</p>
      </div>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>

    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
    <div class="box">
      <p>item</p>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="box calculate-from-width-and-height">
  <p>width & height</p>
</div>

<div class="box calculate-from-width">
  <p>width</p>
</div>

<div class="box calculate-from-height">
  <p>height</p>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.box {
  align-items: center;
  background-color: rgb(19 78 74 / 0.1);
  color: rgb(55 65 81);
  display: flex;
  font-size: 0.625rem;
  justify-content: center;
  margin: 1rem auto;
}

.calculate-from-width-and-height {
  aspect-ratio: 1 / 1;
  height: 8rem;
  width: 6rem;
}

.calculate-from-width {
  aspect-ratio: 1 / 1;
  width: 6rem;
}

.calculate-from-height {
  aspect-ratio: 1 / 1;
  height: 6rem;
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

  .container {
    border: 1px solid rgb(19 78 74 / 0.1);
  }

  .box {
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgb(19 78 74 / 0.1);
    color: rgb(55 65 81);
    display: flex;
    font-size: 0.75rem;
    justify-content: center;
  }

  .box.sticky {
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 10;
  }
</style>

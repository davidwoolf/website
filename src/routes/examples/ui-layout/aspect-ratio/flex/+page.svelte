<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="row">
      <div class="box portrait">
        <p>1 / 2</p>
      </div>

      <div class="box square">
        <div />
        <p>1 / 1</p>
      </div>

      <div class="box landscape">
        <p>2 / 1</p>
      </div>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="row">
  <div class="box portrait">
    <p>1 / 2</p>
  </div>

  <div class="box square">
    <div />
    <p>1 / 1</p>
  </div>

  <div class="box landscape">
    <p>2 / 1</p>
  </div>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.row {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.box {
  align-items: center;
  background-color: rgb(19 78 74 / 0.1);
  display: flex;
  justify-content: center;
  width: 6rem;
}

.portrait {
  aspect-ratio: 1 / 2;
}

.square {
  aspect-ratio: 1 / 1;
}

.landscape {
  aspect-ratio: 2 / 1;
}`} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    padding: 2rem;
    width: 100%;
  }

  p {
    color: rgb(55 65 81);
    font-size: 0.625rem;
    text-align: center;
  }

  .row {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .box {
    align-items: center;
    background-color: rgb(19 78 74 / 0.1);
    display: flex;
    justify-content: center;
    width: 6rem;
  }

  .portrait {
    aspect-ratio: 1 / 2;
  }

  .square {
    aspect-ratio: 1 / 1;
  }

  .landscape {
    aspect-ratio: 2 / 1;
  }
</style>

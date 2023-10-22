<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="container">
      <p class="max-content">
        The width is set to max-content, which will break the container’s bounding box
      </p>
    </div>

    <div class="container">
      <p class="min-content">
        The width is set to min-content, which will shrink to the largest word
      </p>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="container">
  <p class="max-content">
    The width is set to max-content, which will break the container’s bounding box
  </p>
</div>

<div class="container">
  <p class="min-content">
    The width is set to min-content, which will shrink to the largest word
  </p>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.container {
  background-color: rgb(19 78 74 / 0.1);
  padding: 0.5rem;
  width: 12rem;
}

.container p {
  color: rgb(55 65 81);
  font-size: 0.75rem;
  margin: 0;
}

p.max-content {
  width: max-content;
}

p.min-content {
  width: min-content;
}
    `} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    justify-content: center;
    overflow: scroll;
    width: 100%;
  }

  .container {
    background-color: rgb(19 78 74 / 0.1);
    padding: 0.5rem;
    width: 12rem;
  }

  .container p {
    color: rgb(55 65 81);
    font-size: 0.75rem;
    margin: 0;
  }

  .max-content {
    width: max-content;
  }

  .min-content {
    width: min-content;
  }
</style>

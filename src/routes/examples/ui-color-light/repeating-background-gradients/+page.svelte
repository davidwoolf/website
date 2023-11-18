<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="repeating-radial-gradient" />
  </div>

  <div slot="html" class="tab__code">
    <Code language="html" code={`<div class="repeating-radial-gradient"></div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`
.repeating-radial-gradient {
  background: repeating-radial-gradient(
    circle,
    rgb(151 71 255 / 0.5) 0 8.3333%,
    rgb(255 255 255) 8.3333% 16.6666%
  );
  background-size: 2rem 2rem;
  border-radius: 100%;
  height: 12rem;
  margin: 0 auto;
  width: 12rem;
}
    `} />
  </div>
</Tabs>

<style>
  .tab__preview {
    align-items: center;
    height: 100%;
    overflow: scroll;
    width: 24rem;
  }

  .repeating-radial-gradient {
    background: repeating-radial-gradient(
      circle,
      rgb(151 71 255 / 0.5) 0 8.3333%,
      rgb(255 255 255) 8.3333% 16.6666%
    );
    background-size: 2rem 2rem;
    border-radius: 100%;
    height: 12rem;
    margin: 0 auto;
    width: 12rem;
  }
</style>

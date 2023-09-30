<script lang="ts">
  import Code from "../../../components/code/code.svelte";
  import Tabs from "../../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="container">
      <p>
        Setting a max height with text breaking outside of the bounds looks really bad
      </p>
    </div>

    <div class="container overflow-hidden">
      <p>Adding overflow: hidden helps a bit but is still awkward</p>
    </div>

    <div class="container text-overflow">
      <p>Adding text-overflow helps visually but is very limited</p>
    </div>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="container">
  <p>
    Setting a max height with text breaking outside of the bounds looks really bad
  </p>
</div>

<div class="container overflow-hidden">
  <p>Adding overflow: hidden helps a bit but is still awkward</p>
</div>

<div class="container text-overflow">
  <p>Adding text-overflow helps visually but is very limited</p>
</div>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`.container {
  border: 1px solid rgb(19 78 74 / 0.5);
  height: 3rem;
  width: 8rem;
}

p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  padding: 0.25rem;
  margin: 0;
  text-overflow: ellipsis;
  width: 100%;
}

.overflow-hidden {
  margin-top: 3rem;
  height: 2.875rem;
}

.overflow-hidden p {
  height: 100%;
  overflow: hidden;
}

.text-overflow {
  margin-top: 1rem;
  height: 2.875rem;
}

.text-overflow p {
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
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
    height: 3rem;
    width: 8rem;
  }

  p {
    color: rgb(55 65 81 / 0.8);
    font-size: 0.75rem;
    padding: 0.25rem;
    margin: 0;
    text-overflow: ellipsis;
    width: 100%;
  }

  .overflow-hidden {
    margin-top: 3rem;
    height: 2.875rem;
  }

  .overflow-hidden p {
    height: 100%;
    overflow: hidden;
  }

  .text-overflow {
    margin-top: 1rem;
    height: 2.875rem;
  }

  .text-overflow p {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

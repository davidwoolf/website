<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview" class="tab__preview">
    <div class="word-spacing-container">
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>

    <p>the boxes are inline block and the parent has word spacing set to 1rem</p>

    <div class="letter-spacing-container">
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>

    <p>the boxes are inline block and the parent has letter spacing set to 1rem</p>

    <div class="line-height-container">
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>

    <p>the boxes are inline block and the parent has the line height set to 3rem</p>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<div class="word-spacing-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has word spacing set to 1rem</p>

<div class="letter-spacing-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has letter spacing set to 1rem</p>

<div class="line-height-container">
  <div class="box" />
  <div class="box" />
  <div class="box" />
</div>

<p>the boxes are inline block and the parent has the line height set to 3rem</p>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`p {
  color: rgb(55 65 81 / 0.8);
  font-size: 0.75rem;
  max-width: 11rem;
  text-align: center;
}

.word-spacing-container {
  word-spacing: 1rem;
}

.letter-spacing-container {
  word-spacing: 1rem;
}

.line-height-container {
  line-height: 3;
  width: 3rem;
}

.box {
  background-color: rgb(19 78 74 / 0.1);
  display: inline-block;
  height: 3rem;
  width: 3rem;
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
    font-size: 0.75rem;
    max-width: 11rem;
    text-align: center;
  }

  .word-spacing-container {
    word-spacing: 1rem;
  }

  .letter-spacing-container {
    word-spacing: 1rem;
  }

  .line-height-container {
    line-height: 3;
    width: 3rem;
  }

  .box {
    background-color: rgb(19 78 74 / 0.1);
    display: inline-block;
    height: 3rem;
    width: 3rem;
  }
</style>

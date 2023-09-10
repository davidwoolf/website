<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview">
    <form class="form">
      <label class="label">
        <span>First name</span>
        <input
          class="input"
          name="first_name"
          placeholder="John..."
          required
          type="text" />
      </label>

      <button class="button button__subdued" type="reset">reset fields</button>
    </form>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<form>
  <label>
    <span>First name</span>
    <input name="first_name" placeholder="John..." required type="text" />
  </label>

  <button type="reset">reset fields</button>
</form>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label > span {
  color: rgb(55 65 81);
  font-weight: 500;
  font-size: 0.875rem;
}

input {
  border: 1px solid rgb(19 78 74 / 0.1);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  height: 2rem;
  padding: 0.5rem;
}

button {
  background-color: rgb(15 118 110);
  border: 1px solid rgb(15 118 110 / 0.3);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
  color: rgb(255 255 255);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0.25rem 1rem;
}`} />
  </div>
</Tabs>

<style>
  button {
    background-color: rgb(255 255 255);
    border: 1px solid rgb(15 118 110 / 0.3);
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: rgb(4 47 46);
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0.25rem 1rem;
  }
</style>

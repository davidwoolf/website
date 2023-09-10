<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview">
    <form class="form" novalidate action="/">
      <label class="label">
        <span>First name</span>
        <input
          class="input"
          name="first_name"
          placeholder="John..."
          required
          type="text" />
      </label>

      <label class="label">
        <span>Last name</span>
        <input class="input" name="last_name" placeholder="Doe..." type="text" />
      </label>

      <button class="button" type="submit" formnovalidate={false} formaction="/articles">
        submit fields</button>
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

  <label>
    <span>Last name</span>
    <input name="last_name" placeholder="Doe..." type="text" />
  </label>

  <button>submit fields</button>
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
  background-color: rgb(17 94 89);
  border: 1px solid rgb(15 118 110 / 0.3);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  color: rgb(255 255 255);
  font-size: 0.875rem;
  font-weight: 500;
  height: 2rem;
  padding: 0.25rem 1rem;
}

button:active {
  background-color: rgb(19 78 74);
}`} />
  </div>
</Tabs>

<style>
  button {
    background-color: rgb(17 94 89);
    border: 1px solid rgb(15 118 110 / 0.3);
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: rgb(255 255 255);
    font-size: 0.875rem;
    font-weight: 500;
    height: 2rem;
    padding: 0.25rem 1rem;
  }

  button:active {
    background-color: rgb(19 78 74);
  }
</style>

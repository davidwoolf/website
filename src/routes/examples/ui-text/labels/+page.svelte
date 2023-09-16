<script lang="ts">
  import Code from "../../components/code/code.svelte";
  import Tabs from "../../components/tabs/tabs.svelte";
</script>

<Tabs>
  <div slot="preview">
    <label class="label">
      <span>First name</span>
      <input class="input" name="first_name" placeholder="John..." required type="text" />
    </label>
  </div>

  <div slot="html" class="tab__code">
    <Code
      language="html"
      code={`<label class="label">
  <span>First name</span>
  <input class="input" name="first_name" placeholder="John..." required type="text" />
</label>`} />
  </div>
  <div slot="css" class="tab__code">
    <Code
      language="css"
      code={`label {
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
}`} />
  </div>
</Tabs>

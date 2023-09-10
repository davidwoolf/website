<script lang="ts">
  import Tabs from "../../components/tabs/tabs.svelte";
  import hljs from "highlight.js";

  function transformString(input: string, language: string) {
    return hljs.highlight(input, {
      language,
    }).value;
  }
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
    <pre class="code-preview"><code
        >{@html transformString(`<button>click me</button>`, "html")}</code></pre>
  </div>
  <div slot="css" class="tab__code">
    <pre class="code-preview"><code
        >{@html transformString(
          `button {
  all: "unset";
}`,
          "css"
        )}</code></pre>
  </div>
</Tabs>

<script lang="ts">
  import Tabs from "@components/tabs/tabs.svelte";
  import hljs from "highlight.js";

  function transformString(input: string, language: string) {
    return hljs.highlight(input, {
      language,
    }).value;
  }
</script>

<Tabs>
  <div slot="preview">
    <button
      class="bg-white rounded-md border border-teal-700 border-opacity-30 shadow-sm py-1 px-4 font-medium text-sm text-teal-950">
      click me
    </button>
  </div>

  <div slot="html" class="h-full flex-1 flex">
    <pre
      class="
        code-preview
        bg-white
        bg-opacity-70
        border
        border-opacity-20
        border-t-0
        border-teal-800
        font-mono
        p-6
        rounded-b-lg
        text-sm
        w-full
        "><code>{@html transformString(`<button>click me</button>`, "html")}</code></pre>
  </div>
  <div slot="css" class="h-full flex-1 flex">
    <pre
      class="
        code-preview
        bg-white
        bg-opacity-70
        border
        border-opacity-20
        border-t-0
        border-teal-800
        font-mono
        p-6
        rounded-b-lg
        text-sm
        w-full
        "><code
        >{@html transformString(
          `button {
  all: "unset";
}`,
          "css"
        )}</code></pre>
  </div>
</Tabs>

<style lang="postcss">
  .code-preview :global(.hljs-tag),
  .code-preview :global(.hljs-keyword),
  .code-preview :global(.hljs-built_in),
  .code-preview :global(.hljs-params) {
    color: theme("colors.slate.500");
  }

  .code-preview :global(.hljs-name),
  .code-preview :global(.hljs-attr) {
    color: theme("colors.slate.800");
  }

  .code-preview :global(.hljs-string) {
    color: theme("colors.emerald.700");
  }

  .code-preview :global(.hljs-title) {
    color: theme("colors.emerald.900");
  }
</style>

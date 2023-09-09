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
    <form class="flex flex-col gap-4" novalidate>
      <label class="flex flex-col gap-1">
        <span class="font-medium text-sm text-gray-700">First name</span>
        <input
          class="border border-teal-900 border-opacity-10 text-sm rounded-md p-2 h-8"
          name="first_name"
          placeholder="John..."
          required
          type="text" />
      </label>

      <label class="flex flex-col gap-1">
        <span class="font-medium text-sm text-gray-700">First name</span>
        <input
          class="border border-teal-900 border-opacity-10 text-sm rounded-md p-2 h-8"
          name="last_name"
          placeholder="Doe..."
          type="text" />
      </label>

      <button
        class="
        bg-teal-700
        rounded-md
        border
        border-teal-700
        border-opacity-30
        h-8
        shadow-sm
        py-1
        px-4
        font-medium
        text-sm
        text-white
        
        active:shadow-inner"
        type="submit"
        formnovalidate={false}>
        submit fields
      </button>

      <button
        class="
        bg-white
        rounded-md
        border
        border-teal-700
        border-opacity-30
        h-8
        shadow-sm
        py-1
        px-4
        font-medium
        text-sm
        text-teal-950
        
        active:shadow-inner"
        type="reset">
        reset fields
      </button>
    </form>
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

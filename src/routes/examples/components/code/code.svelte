<script lang="ts">
  import hljs from "highlight.js";

  function transformString(input: string, language: string) {
    return hljs.highlight(input, {
      language,
    }).value;
  }

  export let code: string;
  export let language = "text";
</script>

<pre class="code-preview"><code>{@html transformString(code, language)}</code></pre>

<style>
  .code-preview {
    background-color: rgba(255 255 255 / 0.7);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    font-size: 0.875rem;
    line-height: 1.75;
    margin: 0;
    padding: 1.5rem;
    width: 100%;
  }

  :global(.code-preview .hljs-tag),
  :global(.code-preview .hljs-keyword),
  :global(.code-preview .hljs-built_in),
  :global(.code-preview .hljs-params) {
    color: #64748b;
  }

  :global(.code-preview .hljs-name),
  :global(.code-preview .hljs-attr),
  :global(.code-preview .hljs-selector-tag) {
    color: #1e293b;
  }

  :global(.code-preview .hljs-comment) {
    color: #64748b;
  }

  :global(
      .code-preview .hljs-title,
      .code-preview .hljs-string,
      .code-preview .hljs-attribute
    ) {
    color: #047857;
  }
</style>

import { error } from "@sveltejs/kit";
import { marked } from 'marked';
import hljs from 'highlight.js';

export async function load({ fetch, params }) {
  const {slug} = params;
  const res = await fetch(`/${slug}.md`);

  if (res.status === 404) {
    throw error(404, "page not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }

  // if the res is accurate, we can grab the text response
  const post = await res.text();

  // note: this is the deprecated way of doing this, but is required to work in SvelteKit
  marked.setOptions({
    highlight: function(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(code, { language: validLanguage }).value;
    }
  });

  return {
    slug,
    post: marked.parse(post, {mangle: false, headerIds: false})
  };
}

import { error } from "@sveltejs/kit";
import { marked } from 'marked';

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

  return {
    slug,
    post: marked.parse(post, {mangle: false, headerIds: false})
  };
}

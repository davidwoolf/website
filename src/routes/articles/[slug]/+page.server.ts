import { error } from "@sveltejs/kit";
import { marked } from 'marked';

export async function load({ fetch, params }) {
  const {slug} = params;
  const res = await fetch(`/static/articles/${slug}.md`);
  const post = await res.text();

  if (res.status === 404) {
    throw error(404, "page not found");
  }

  if (res.status !== 200) {
    throw error(500, "something went wrong");
  }

  return {
    slug,
    post: marked.parse(post)
  };
}

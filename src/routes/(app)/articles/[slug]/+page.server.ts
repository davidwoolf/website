import { error } from "@sveltejs/kit";
import { marked } from 'marked';
import hljs from 'highlight.js';

interface PostItem {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
}

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
  let post = await res.text();
  
  // grab all of the matching citations
  const references = post.match(/<sup>\[x\]\((\w|:|\/|\.|-|#)*\)<\/sup>/g);
  let links: string[] = [];

  if(references) {
    for(let index = 0; index < references.length; index++) {
      const formattedValue = references[index].replace("x", String(index + 1));
      
      // grab the link for later
      const link = references[index].match(/(https:\/\/)(\w|:|\/|\.|-|#)*/g);

      if(link) {
        links = links.concat([link[0]])
      }
    
      post = post.replace(references[index], formattedValue);
    }
  }

  // note: this is the deprecated way of doing this, but is required to work in SvelteKit
  marked.setOptions({
    highlight: function(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(code, { language: validLanguage }).value;
    }
  });

  const allPosts = await fetch(`/list.json`);
  let matchingPost: Array<PostItem> = [];

  if (allPosts.status === 200) {
    const postList = await allPosts.json();

     matchingPost = postList.filter((item: PostItem) => item.slug === slug);
  }
  
  return {
    slug,
    title: matchingPost[0].title,
    excerpt: matchingPost[0].excerpt,
    post: marked.parse(post, {mangle: false, headerIds: false}),
    references: links,
  };
}

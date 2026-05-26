import { error } from "@sveltejs/kit";
import { marked } from "marked";
import hljs from "highlight.js";
//#region src/routes/(app)/articles/[slug]/+page.server.ts
async function load({ fetch, params }) {
	const { slug } = params;
	const res = await fetch(`/${slug}.md`);
	if (res.status === 404) throw error(404, "page not found");
	if (res.status !== 200) throw error(500, "something went wrong");
	let post = await res.text();
	const references = post.match(/\[citation\]\((\w|:|\/|\.|-|#)*\)/g);
	let links = [];
	if (references) for (let index = 0; index < references.length; index++) {
		const formattedValue = references[index].replace("citation", String(index + 1));
		const link = references[index].match(/(https:\/\/)(\w|:|\/|\.|-|#)*/g);
		if (link) links = links.concat([link[0]]);
		post = post.replace(references[index], `<sup>${formattedValue}</sup>`);
	}
	marked.setOptions({ highlight: function(code, language) {
		const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
		return hljs.highlight(code, { language: validLanguage }).value;
	} });
	const allPosts = await fetch(`/list.json`);
	let matchingPost = [];
	if (allPosts.status === 200) matchingPost = (await allPosts.json()).filter((item) => item.slug === slug);
	return {
		slug,
		title: matchingPost[0].title,
		excerpt: matchingPost[0].excerpt,
		post: marked.parse(post, {
			mangle: false,
			headerIds: false
		}),
		references: links
	};
}
//#endregion
export { load };

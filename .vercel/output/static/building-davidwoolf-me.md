# Building davidwoolf.me

What better way to start this article section than with a dive into how this site was made. You can browse and fork the full website on github [here](https://github.com/davidwoolf/website).

## Framework 

The site is built using SvelteKit (for routing and components) and TailwindCSS (for styling and layout). Articles are written in Markdown and the [Marked](https://marked.js.org) package is used to convert them to HTML.

SvelteKit is similar to NextJS, meaning everything is written in HTML, Javascript, and CSS. However, non-interactive content is server side rendered (SSR), which means you can do stuff like disable javascript and still load the site.

## Hosting

Vercel is used to host the site and was chosen due to how easy it is to setup:

- sign up and connect your github account
- import the repo
- add a domain to the project and update your DNS settings

## Articles and wildcard urls

Each article is setup as its own wildcard url in SvelteKit:

```
- routes
  - articles
    - [slug]
      - +page.server.ts
      - +page.svelte
```

The `+page.server.ts` file is a server side loader that checks the passed in slug and fetches a `.md` file:

```ts
export async function load({ fetch, params }) {
  const { slug } = params;
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
    post: marked.parse(post)
  };
}
```

- The `load` function is a SvelteKit feature for passing data to your svelte route component
- Because we named the wildcard folder `[slug]`, we can grab that value from the `params` object available as an argument in `load`
- SvelteKit comes with a `static` folder that acts as the public folder on the server, so you can load files directly from the folder, in this case `await fetch(/${slug}.md)`
- From there we check if there were any errors loading the markdown file. If it can't be found (`res.status === 404`), we want to show a "file not found" message, otherwise we'll throw 500.
- If the file was found, we can grab the text value and then return the contents passed through `marked.parse`

The `page.svelte` file is run on either the server or client (this means you can add client-only logic like showing an alert dialog):

```html
<script lang="ts">
  import type { PageData } from "../[slug]/$types";
  export let data: PageData;
</script>

<article>
  {@html data.post}
</article>
```

- In my case, I'm using TypeScript, so I can set the `lang=ts` attribute on the script section and import the `PageData` type. This type is auto generated from Svelte based on what the `load` function returns.
- In order to actually render the HTML that the Marked package is generating, we need to use the `@html` svelte helper and pass it `data.post`
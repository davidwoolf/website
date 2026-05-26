import path from 'path';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// The whole site is prerendered (see src/routes/+layout.ts), so it ships as
		// plain static files with no serverless function. Output goes to build/.
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/components')
		}
	}
};

export default config;

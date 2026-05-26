export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["anatomy-everyday-ui-color/color-mix.png","anatomy-everyday-ui-color/conic-gradient.png","anatomy-everyday-ui-color/increasing-decreasing-hue.png","anatomy-everyday-ui-color/linear-gradient.png","anatomy-everyday-ui-color/long-short-hue.png","anatomy-everyday-ui-color/radial-gradient.png","anatomy-everyday-ui-layout/block-inline-axes.png","anatomy-everyday-ui-layout/flex-grow.png","anatomy-everyday-ui-layout/grid-implicit-tracks.png","anatomy-everyday-ui-layout/grid-tracks.png","anatomy-of-everday-ui-button.md","anatomy-of-everyday-ui-color-light.md","anatomy-of-everyday-ui-layout.md","anatomy-of-everyday-ui-text.md","building-davidwoolf-me.md","creating-a-web-server-deno.md","design-states-for-engineers.md","favicon.png","free-form-box-rotation.md","list.json","logos/flying-hippo.png","logos/koala.svg","logos/tempest.svg","logos/theory.svg","luka-2.jpeg","luka.jpeg","melt-combobox.md","profile.jpeg","using-window-postmessage-react.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown",".json":"application/json",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CDgSLzmz.js",app:"_app/immutable/entry/app.CvUjlwER.js",imports:["_app/immutable/entry/start.CDgSLzmz.js","_app/immutable/chunks/CsNLp218.js","_app/immutable/chunks/BjW1HMUo.js","_app/immutable/chunks/CjDQjpzk.js","_app/immutable/entry/app.CvUjlwER.js","_app/immutable/chunks/BjW1HMUo.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/(app)",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,,], errors: [1,,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/examples/button/aria-expanded",
				pattern: /^\/examples\/button\/aria-expanded\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/examples/button/aria-pressed",
				pattern: /^\/examples\/button\/aria-pressed\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/examples/button/default-style",
				pattern: /^\/examples\/button\/default-style\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/examples/button/international",
				pattern: /^\/examples\/button\/international\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/examples/button/reset",
				pattern: /^\/examples\/button\/reset\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/examples/button/role-button",
				pattern: /^\/examples\/button\/role-button\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/examples/button/submit",
				pattern: /^\/examples\/button\/submit\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/backdrop-filters",
				pattern: /^\/examples\/ui-color-light\/backdrop-filters\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/drop-shadow",
				pattern: /^\/examples\/ui-color-light\/drop-shadow\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/filters",
				pattern: /^\/examples\/ui-color-light\/filters\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/inset-shadow",
				pattern: /^\/examples\/ui-color-light\/inset-shadow\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/repeating-background-gradients",
				pattern: /^\/examples\/ui-color-light\/repeating-background-gradients\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/examples/ui-color-light/repeating-gradients",
				pattern: /^\/examples\/ui-color-light\/repeating-gradients\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/examples/ui-layout/aspect-ratio/dimensions",
				pattern: /^\/examples\/ui-layout\/aspect-ratio\/dimensions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/examples/ui-layout/aspect-ratio/flex",
				pattern: /^\/examples\/ui-layout\/aspect-ratio\/flex\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/examples/ui-layout/grid/span-tracks",
				pattern: /^\/examples\/ui-layout\/grid\/span-tracks\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/examples/ui-layout/intrinsic-dimensions",
				pattern: /^\/examples\/ui-layout\/intrinsic-dimensions\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/examples/ui-layout/position/sticky",
				pattern: /^\/examples\/ui-layout\/position\/sticky\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/inline-spacing",
				pattern: /^\/examples\/ui-text\/inline-spacing\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/labels",
				pattern: /^\/examples\/ui-text\/labels\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/letter-spacing",
				pattern: /^\/examples\/ui-text\/letter-spacing\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/line-height",
				pattern: /^\/examples\/ui-text\/line-height\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/size/em",
				pattern: /^\/examples\/ui-text\/size\/em\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/text-overflow/line-clamp",
				pattern: /^\/examples\/ui-text\/text-overflow\/line-clamp\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/examples/ui-text/text-overflow/overflow-hidden",
				pattern: /^\/examples\/ui-text\/text-overflow\/overflow-hidden\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

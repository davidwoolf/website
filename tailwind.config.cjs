/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './static/**/*.md'],
	theme: {
		extend: {
			fontSize: {
				hint: '0.625rem',
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.5rem',
				'2xl': '2rem'
			},
			typography: (theme) => ({
        DEFAULT: {
          css: {
						"p": {
							paddingTop: "1rem",
						},
						"h2 + p": {
							paddingTop: "0.5rem"
						},
						"h3 + p": {
							paddingTop: "0"
						},
						"h2 > code, h3 > code, h4 > code, li > code, p > code, table code, p > em > code, a > code, s > code": {
							backgroundColor: theme("colors.slate.200"),
							color: theme("colors.slate.900"),
							borderRadius: ".25rem",
							display: "inline-block",
							fontSize: ".825em",
							fontStyle: "normal",
							fontWeight: 500,
							margin: 0,
							padding: "0 .2rem",

							"&:before, &:after": {
								display: "none"
							},
						},
						"a > code": {
							textDecoration: "underline"
						},
						"s > code": {
							textDecoration: "line-through"
						},
						"h2 > code, h3 > code, h4 > code": {
							fontWeight: 700,
						},
						// prose-iframe:* is not supported
						iframe: {
							aspectRatio: "1 / 1",
							borderRadius: "0.5rem",
							boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
							marginTop: "1rem",

							"@media(min-width: 768px)": {
								aspectRatio: "16 / 9",
							}
						},
            a: {
							transition: "all .2s ease",
							'&:hover': {
								opacity: theme('opacity.70'),
								textDecoration: "none",
							}
						},
						"sup a": {
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline"
							}
						},
						"footer a": {
							wordBreak: "break-all",
						},
						cite: {
							fontStyle: "normal"
						},
						".hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params": {
							color: theme("colors.slate.500"),
						},
						".hljs-name, .hljs-attr, .hljs-selector-tag": {
							color: theme("colors.emerald.700"),
						},
						".hljs-comment": {
							color: theme("colors.slate.500"),
						},
						".hljs-title, .hljs-string, .hljs-attribute": {
							color: theme("colors.emerald.900"),
						},
						
          },
        },
      }),
		}
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
};

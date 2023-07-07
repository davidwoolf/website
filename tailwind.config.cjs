/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				hint: '0.625rem',
				xs: '0.75rem',
				sm: '0.8125rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.5rem',
				'2xl': '2rem'
			},
			typography: (theme) => ({
        DEFAULT: {
          css: {
						"li > code, p > code": {
							backgroundColor: theme("colors.slate.200"),
							color: theme("colors.slate.900"),
							borderRadius: ".25rem",
							display: "inline-block",
							fontSize: ".825em",
							fontWeight: 500,
							margin: 0,
							padding: "0 .2rem",

							"&:before, &:after": {
								display: "none"
							},
						},
						pre: {
							borderRadius: "0.5rem",
							borderWidth: 1,
							borderStyle: "solid",
							borderColor: theme("colors.slate.100"),
							backgroundColor: "white",
						},
            a: {
							transition: "all .2s ease",
							'&:hover': {
								opacity: theme('opacity.70'),
								textDecoration: "none",
							}
						},
						".hljs-tag, .hljs-keyword, .hljs-built_in, .hljs-params": {
							color: theme("colors.slate.500"),
						},
						".hljs-name, .hljs-attr": {
							color: theme("colors.slate.800"),
						},
						".hljs-string": {
							color: theme("colors.emerald.700"),
						},
						".hljs-title": {
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

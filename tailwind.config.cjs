/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				hint: '0.625rem',
				xs: '0.75rem',
				sm: '0.8125rem',
				base: '0.9375rem',
				lg: '1.125rem',
				xl: '1.5rem',
				'2xl': '2rem'
			},
			typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
							transition: "all .2s ease",
							'&:hover': {
								opacity: theme('opacity.70'),
								textDecoration: "none",
							}
						}
          },
        },
      }),
		}
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
};

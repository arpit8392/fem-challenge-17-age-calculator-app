/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				purple: 'hsl(259, 100%, 65%)',
				lightRed: 'hsl(0, 100%, 67%)',
				offWhite: 'hsl(0, 0%, 94%)',
				lightGrey: 'hsl(0, 0%, 86%)',
				smokeyGrey: 'hsl(0, 1%, 44%)',
				offBlack: 'hsl(0, 0%, 8%)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}

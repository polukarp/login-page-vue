/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'black-bg': '#1b1d21',
				'light-gray-bg': '#e9e9e9',
				'yellow-landing': '#e7cb0a',
				'orange-landing': '#ff8534',
				'purple-landing': '#6729ff',
			},
		},
	},
	plugins: [],
};

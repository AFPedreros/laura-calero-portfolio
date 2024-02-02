import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			  "2xl": "1400px",
			},
		  },
		extend: {
			colors: {
				background:"#000000",
				foreground: "#FFFFFF",
				primary: "#6A48F2", 
				border:"#888888"
			}
		},
	},
	plugins: [animations],
}

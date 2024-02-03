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
		keyframes: {
			"fade-out-down": {
				from: {
				  opacity: "0",
				},
				to: {
				  opacity: "1",
				  color:"#FFFFFF"
				},
			  },
			  "fade-up-images":{
					from: {
						opacity: "0",
						translate:"0 50px",
						scale: "0.7",
					  },
					  to: {
						opacity: "1",
						translate:"0 0",
						scale: "1",
					  },
					
				}
		},
		animation: {
			"fade-out-down": "fade-out-down linear forwards",
			"fade-up-images":"fade-up-images linear both"
		  },
		supports: {
			"no-scroll-driven-animations": "not(animation-timeline: scroll())",
		  },
	},
	plugins: [animations],
}

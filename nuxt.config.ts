// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxtjs/tailwindcss", "@nuxt/eslint"],
	css: ["@/assets/css/main.css"],
	fonts: {
		families: [
			{ name: "Roboto", provider: "google" },
			{ name: "Press Start 2P", provider: "google" },
			{ name: "Rubik Mono One", provider: "google" },
			{ name: "Luckiest Guy", provider: "google" },
			{ name: "Staatliches", provider: "google" },
			{ name: "Bangers", provider: "google" },
		],
	},
	app: {
		head: {
			title: "Persona 5 Text Generator",
			htmlAttrs: {
				lang: "en",
			},
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},
});

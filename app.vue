<template>
	<UApp>
		<NuxtPage />
	</UApp>
</template>

<script setup lang="ts">
const generalDescription = "Generate texts styled like in Persona 5!.";
const generalTitle = "Persona 5 Text Generator";
const fullUrl = useRequestURL().href;
const logoUrl = "/logo.png";

useSeoMeta({
	ogTitle: generalTitle,
	ogDescription: generalDescription,
	ogImage: logoUrl,
	ogType: "website",
	ogUrl: fullUrl,
	ogImageWidth: 621,
	ogImageHeight: 385,
	ogImageAlt: generalTitle,
	ogImageType: "image/png",
	ogSiteName: generalTitle,
	ogLocale: "en_US",
	twitterImage: logoUrl,
	twitterTitle: generalTitle,
	twitterDescription: generalDescription,
	twitterCard: "summary_large_image",
});

useHead({
	title: generalTitle,
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/icon",
			href: "/favicon.ico",
		},
	],
	meta: [{ name: "description", content: generalDescription }],
});
</script>

<template>
	<div>
		<DisplayBackground />
		<main class="flex flex-col items-center">
			<ColorModeButton class="fixed top-5 right-5 z-10" />
			<img class="m-7" src="/assets/svg/logo.svg" alt="Large Logo" />
			<UserInputText @update_text="updateText" />
			<ExportButton class="m-5" :target="generatedTextContainer" />
			<div ref="generatedTextContainer">
				<PersonaText :text="generatedText" />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
const generatedText = ref("");
const generatedTextContainer = ref(null);

const updateText = (text: string) => {
	generatedText.value = text;
};
</script>

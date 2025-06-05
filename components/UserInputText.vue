<template>
	<UInput
		v-model="textToStylize"
		leading-icon="i-lucide-pencil"
		variant="outline"
		color="primary"
		placeholder="Insert your text here!"
		size="lg"
	/>
</template>

<script setup lang="ts">
const textToStylize = ref("");

const emit = defineEmits(["update_text"]);

watch(textToStylize, (newText: string) => {
	emit("update_text", newText);
});
</script>

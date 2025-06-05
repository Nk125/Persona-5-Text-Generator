<template>
	<UButtonGroup>
		<UButton
			leading-icon="i-lucide-download"
			size="md"
			color="primary"
			variant="solid"
			class="hover:cursor-pointer"
			@click="capture"
			>Export as image</UButton
		>

		<USelectMenu v-model="imageType" :items="imageTypes" />
	</UButtonGroup>
</template>

<script setup lang="ts">
interface Props {
	target: Element | null;
}

const props = defineProps<Props>();
const imageTypes = ["png", "jpeg", "svg"];
const imageType = ref(imageTypes[0]);

const capture = () => {
	if (props.target) {
		exportImage(props.target, imageType.value);
	} else {
		console.error("Element didn't fully load yet");
	}
};
</script>

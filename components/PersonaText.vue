<template>
	<div class="text-container">
		<span
			v-for="(char, index) in styledText"
			:key="index"
			:class="char.styleClass"
		>
			{{ char.letter }}
		</span>
	</div>
</template>

<script setup lang="ts">
interface StyledLetter {
	letter: string;
	styleClass: string;
}

const fonts = [
	"Press Start 2P",
	"Rubik Mono One",
	"Bangers",
	"Luckiest Guy",
	"Staatliches",
];
const scaleFactors = ["scale-90", "scale-125", "scale-100"];
let styledText: StyledLetter[] = [];

const props = defineProps({
	text: {
		type: String,
		default: "",
	},
});

watch(
	() => props.text,
	(newText: string) => {
		stylizeText(newText);
	},
);

const stylizeText = (text: string) => {
	styledText = text.split("").map((letter) => ({
		letter: letter,
		styleClass: letter === " " ? "space" : getRandomStyleClass(),
	}));
};

const getRandomStyleClass = () => {
	const rotation = Math.ceil(Math.random() * 4 + 1);
	const rotationDirection = Math.random() > 0.5 ? "" : "-";
	const bgColor = Math.random() > 0.5 ? "default-char" : "inverted-char";
	const fontStyle = getRandomFont();
	const scale = scaleFactors[Math.floor(Math.random() * scaleFactors.length)];

	return `${bgColor} ${rotationDirection}rotate-${rotation} ${scale} ${fontStyle}`;
};

const getRandomFont = () => {
	const font = "'" + fonts[Math.floor(Math.random() * fonts.length)] + "'";

	let style = `font-[${font}]`;

	// Set additional styles randomly
	if (Math.random() > 0.5) {
		style += " font-bold";
	}

	if (Math.random() > 0.5) {
		style += " uppercase";
	}

	return style;
};

stylizeText(props.text);
</script>

<style scoped>
.text-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	font-size: 2rem;
}

.default-char {
	background-color: var(--background-color);
	color: var(--text-color);
}

.inverted-char {
	background-color: var(--text-color);
	color: var(--background-color);
}

.space {
	margin: 0 0.2rem;
}
</style>

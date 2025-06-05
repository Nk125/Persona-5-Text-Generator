<template>
	<div id="background">
		<div
			v-for="(_, index) in items"
			:key="index"
			class="svg-item"
			:style="getRandomStyle()"
		>
			<img
				class="svg-img"
				src="/assets/svg/Phantom Thieves Logo.svg"
				alt="Logo from the Phantom Thieves"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const items = Array.from({ length: 20 });

const getRandomStyle = () => {
	const x = Math.random() * 100 + "vw";
	const y = Math.random() * 100 + "vh";
	const rotation = Math.random() * 360 + "deg";

	return `top: ${y}; left: ${x}; transform: rotate(${rotation});`;
};
</script>

<style scoped>
.svg-img {
	filter: invert(var(--invert-background));
}

#background {
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}

.svg-item {
	position: absolute;
	width: 100px;
	height: 100px;
	opacity: 0.5;
}
</style>

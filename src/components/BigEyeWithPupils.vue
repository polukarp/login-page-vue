<template>
	<div
		ref="eyeRef"
		class="aspect-square rounded-full bg-white w-4 flex justify-center items-center after:absolute after:w-[8px] after:aspect-square after:bottom-[8px] after:bg-black after:rounded-full"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const eyeRef = ref<HTMLElement>();

useFollow({ elementRef: eyeRef, rotate: true, tension: 0.8 });
</script>

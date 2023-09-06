<template>
	<div
		ref="eyeRef"
		class="aspect-square rounded-full bg-white w-3 flex justify-center items-center after:absolute after:w-[6px] after:h-[6px] after:bottom-[6px] after:bg-black after:rounded-full"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const eyeRef = ref<HTMLElement>();
useFollow({ elementRef: eyeRef, rotate: true, tension: 1.4 });
</script>

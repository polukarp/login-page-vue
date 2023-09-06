<template>
	<div ref="eyeRef" class="aspect-square bg-black w-[8px] rounded-full"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const eyeRef = ref<HTMLElement>();

useFollow({ elementRef: eyeRef, rotate: true, tension: 1.5 });
</script>

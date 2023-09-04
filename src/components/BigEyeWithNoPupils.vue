<template>
	<div ref="eyeRef" class="aspect-square bg-black w-[14px] rounded-full"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const eyeRef = ref<HTMLElement>();

useFollow({ elementRef: eyeRef, rotate: true, tension: 0.8 });
</script>

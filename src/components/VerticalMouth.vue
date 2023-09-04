<template>
	<div ref="mouthRef" class="aspect-[1/4] w-2 bg-black"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const mouthRef = ref();
useFollow({ elementRef: mouthRef, maxDistance: 2000 });
</script>

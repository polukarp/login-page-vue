<template>
	<div ref="mouthRef" class="w-[70px] h-[6px] bg-black"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const mouthRef = ref();
useFollow({ elementRef: mouthRef, tension: 0.1 });
</script>

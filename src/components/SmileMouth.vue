<template>
	<div ref="mouthRef" class="w-[24px] h-[12px] relative bg-black rounded-bl-full rounded-br-full"></div>
</template>

<script setup lang="ts">
import { useFollow } from '@/composables';
import { ref } from 'vue';

const mouthRef = ref();
useFollow({ elementRef: mouthRef, maxDistance: 2000 });
</script>

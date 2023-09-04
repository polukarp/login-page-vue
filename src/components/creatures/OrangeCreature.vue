<template>
	<div class="w-[240px] h-[120px] relative bg-orange-landing rounded-tl-full rounded-tr-full">
		<SmileMouth class="absolute top-[80px] left-[125px]" />
		<BigEyeWithNoPupils class="bottom-10 right-16 absolute" />
		<BigEyeWithNoPupils class="bottom-10 right-32 absolute" />
	</div>
</template>

<script setup lang="ts">
import { BigEyeWithNoPupils, SmileMouth } from '@/components';
</script>

<style scoped></style>

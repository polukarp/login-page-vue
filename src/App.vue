<template>
	<main class="flex items-center justify-center min-h-screen min-w-screen bg-black-bg">
		<div class="bg-light-gray-bg aspect-video w-[80%] rounded-3xl grid p-4 grid-cols-5">
			<!-- SCENE -->
			<div class="col-span-3 m-auto">
				<PurpleCreature />
			</div>
			<div class="col-span-2 col-start-4 bg-white rounded-xl">
				<form class="max-w-sm m-auto" action=""></form>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { PurpleCreature } from '@/components/creatures';
</script>

<style scoped></style>

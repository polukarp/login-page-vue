<template>
	<main class="flex items-center justify-center min-h-screen min-w-screen bg-black-bg">
		<div class="bg-light-gray-bg aspect-video w-[80%] rounded-3xl grid p-4 grid-cols-5">
			<!-- SCENE -->
			<div class="col-span-3 m-auto relative">
				<div class="relative max-h-[600px]">
					<PurpleCreature class="absolute top-[150px]" />
					<BlackCreature class="absolute left-[120px] bottom-[100px]" />
					<OrangeCreature class="absolute bottom-[220px] right-[80px]" />
					<YellowCreature class="absolute bottom-[400px] left-[190px]" />
				</div>
			</div>
			<div class="col-span-2 col-start-4 bg-white rounded-xl">
				<form class="max-w-sm m-auto" action=""></form>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { PurpleCreature, BlackCreature, OrangeCreature, YellowCreature } from '@/components/creatures';
</script>

<style scoped></style>

<template>
	<main class="flex items-center justify-center min-h-screen min-w-screen bg-black-bg">
		<div class="bg-light-gray-bg aspect-video w-[80%] rounded-3xl grid p-4 grid-cols-5">
			<!-- SCENE -->
			<div class="relative col-span-3 m-auto">
				<div class="relative max-h-[600px]">
					<PurpleCreature class="absolute top-[150px]" />
					<BlackCreature class="absolute left-[120px] bottom-[100px]" />
					<OrangeCreature class="absolute bottom-[220px] right-[80px]" />
					<YellowCreature class="absolute bottom-[400px] left-[190px]" />
				</div>
			</div>
			<div class="flex col-span-2 col-start-4 bg-white rounded-xl">
				<form class="max-w-[320px] flex flex-col gap-4 m-auto text-center py-10" action="">
					<div>
						<img class="mx-auto mb-6" src="./assets/logo.jpg" alt="logo" />
						<h1 class="text-3xl font-extrabold tracking-wide">Welcome back!</h1>
						<p class="py-2 text-sm">Please enter your details</p>
					</div>
					<div class="flex flex-col gap-3">
						<div class="w-full py-3 font-semibold text-left border-b-2 border-black">
							<input
								class="w-full border-0"
								placeholder="Email"
								type="email"
								name="email"
								id="email" />
						</div>
						<div
							class="relative flex w-full py-3 font-semibold text-left border-b-2 border-black">
							<input
								class="w-full border-0"
								type="password"
								name="password"
								placeholder="Password"
								id="password" />
							<img
								src="./assets/eye-semi-open.jpg"
								class="absolute right-0 cursor-pointer w-7"
								alt="" />
						</div>
						<div class="flex justify-between gap-4 py-1 text-sm">
							<div>
								<input
									class="mr-1"
									type="checkbox"
									name="Remember for 30 days"
									id="remember-checkbox" />
								<label for="remember-checkbox">Remember for 30 days</label>
							</div>
							<span class="text-gray-400">Forgot password?</span>
						</div>
					</div>
					<div class="flex flex-col gap-3 py-3 font-semibold">
						<button class="w-full p-3 text-white bg-black rounded-3xl" type="submit">
							Log In
						</button>
						<button
							class="w-full p-3 text-black bg-gray-200 hover:bg-gray-300 rounded-3xl"
							type="submit">
							Log In with Google
						</button>
					</div>
					<div>
						<p>Don't have an account? <button class="font-bold">Sign Up</button></p>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { PurpleCreature, BlackCreature, OrangeCreature, YellowCreature } from '@/components/creatures';
</script>

<style scoped></style>

<script>
	import ProfileSection from './Profile.svelte';
	import LikeSection from './LikeSection.svelte';
</script>

<main>
	<div class="absolute top-0 left-0 bg-gradient-to-t from-black to-40% w-screen">
		<div class="flex flex-col justify-between h-[calc(100vh-150px)]">
			<div class="flex justify-between items-center p-3">
				<text class="text-white font-bold text-3xl">Reels</text>
				<svg
					class="h-8 w-8 text-white"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
					/>
					<circle cx="12" cy="13" r="4" />
				</svg>
			</div>
			<div class="flex flex-row justify-between p-1">
				<ProfileSection />
				<LikeSection />
			</div>
		</div>
	</div>
</main>

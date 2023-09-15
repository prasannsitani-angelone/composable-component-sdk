<script>
	import Video from './Video.svelte';
	import VideoControls from './VideoControls.svelte';
</script>

<main>
	<div class="h-[calc(100vh-150px)] w-screen carousel carousel-vertical">
		{#each new Array(3).fill(0) as item}
			<div class="relative carousel-item h-full">
				<Video />
				<VideoControls />
			</div>
		{/each}
	</div>
</main>

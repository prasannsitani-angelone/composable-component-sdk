<script>
	import { goto } from '$app/navigation';
	import { Card, Bottomsheet } from '$lib/index.js';

	let open = false;

	const handleOpen = () => {
		open = true;
	};

	const handleClose = () => {
		open = false;
	};

	const handleSelfScreen = () => {
		goto('/detail');
	};
</script>

<main class="relative h-[calc(100vh-0px)] {open ? 'overflow-hidden' : 'overflow-auto'}">
	{#each new Array(10) as card}
		<Card
			on:self-overlay={handleOpen}
			on:self-screen={handleSelfScreen}
			on:external-overlay
			on:external-screen
		/>
	{/each}
	<Bottomsheet {open} on:close={handleClose} />
</main>

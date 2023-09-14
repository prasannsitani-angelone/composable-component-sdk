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

<!-- {open ? 'overflow-hidden' : 'overflow-auto'}" -->
<main class="relative h-1/4 box-border w-1/2 flex flex-row">
	{#each new Array(4) as card}
		<Card
			on:self-overlay={handleOpen}
			on:self-screen={handleSelfScreen}
			on:external-overlay
			on:external-screen
		/>
	{/each}
	<Bottomsheet {open} on:close={handleClose} />
</main>

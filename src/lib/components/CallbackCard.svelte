<script>
	import { goto } from '$app/navigation';
	import { Card, Bottomsheet } from '$lib/index.js';
	import { Number } from '$lib';

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

<main>
	<Card
		number={Number.getValue()}
		on:self-overlay={handleOpen}
		on:self-screen={handleSelfScreen}
		on:external-overlay
		on:external-screen
	/>
	<Bottomsheet {open} on:close={handleClose} />
</main>

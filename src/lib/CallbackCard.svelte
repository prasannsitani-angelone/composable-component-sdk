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
		goto('http://localhost:3001/detail');
	};
</script>

<main>
	<Card
		on:self-overlay={handleOpen}
		on:self-screen={handleSelfScreen}
		on:external-overlay
		on:external-screen
	/>
	<Bottomsheet {open} on:close={handleClose} />
</main>

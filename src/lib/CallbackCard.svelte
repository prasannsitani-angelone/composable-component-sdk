<script>
	import { Card, Bottomsheet } from '$lib/index.js';

	let open = false;

	const handleOpen = () => {
		open = true;
	};

	const handleClose = () => {
		open = false;
	};
</script>

<main>
	<Card on:open={handleOpen} on:callback />
	<Bottomsheet {open} on:close={handleClose} />
</main>

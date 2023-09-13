<script>
	import { Card, Bottomsheet } from '../lib';

	let open = false;

	const handleOpen = () => {
		open = true;
	};

	const handleClose = () => {
		open = false;
	};
</script>

<main>
	<Card on:open={handleOpen} />
	<Bottomsheet {open} on:close={handleClose} />
</main>

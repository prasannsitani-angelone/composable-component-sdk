<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('http://localhost:3000/about');
	}
</script>

<main>
	<div>
		<h3>Detail Page</h3>
		<button on:click={handleClick}> Click Me </button>
	</div>
</main>

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let number;

	function handleSelfOverlay() {
		document.body.style.overflow = 'hidden';
		dispatch('self-overlay');
	}

	function handleExternalOverlay() {
		document.body.style.overflow = 'hidden';
		dispatch('external-overlay');
	}

	function handleSelfScreen() {
		dispatch('self-screen');
	}

	function handleExternalScreen() {
		dispatch('external-screen');
	}
</script>

<main>
	<div class="card shadow-xl flex justify-center items-center w-full p-4">
		<figure>
			<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Shoes" />
		</figure>
		<div class="pt-4 flex flex-col items-center gap-4">
			<h2 class="font-bold text-xl capitalize">Shoes {number === 10 ? 'abc' : 'xyz'}</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-center">
				<button class="btn btn-primary" on:click={handleSelfOverlay}>Open Self Overlay</button>
				<button class="btn btn-secondary" on:click={handleExternalOverlay}
					>Open Parent Overlay</button
				>
				<button class="btn btn-info" on:click={handleSelfScreen}>Open Self Screen</button>
				<button class="btn btn-success" on:click={handleExternalScreen}>Open Parent Screen</button>
			</div>
		</div>
	</div>
</main>

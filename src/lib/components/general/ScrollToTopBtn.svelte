<script>
	import FaArrowUp from 'svelte-icons/fa/FaArrowUp.svelte';
	import { fade } from 'svelte/transition';

	let scrollPosition = 0;
</script>

<svelte:window bind:scrollY={scrollPosition} />
{#if scrollPosition > 150}
	<button
		transition:fade
		class="fixed bottom-12 right-5 z-50 h-9 w-9 rounded-full bg-amber-700 p-1.5 text-white shadow-md transition-all duration-300 hover:bg-amber-900 hover:text-white"
		on:click={() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}}
	>
		<FaArrowUp />
	</button>
{/if}

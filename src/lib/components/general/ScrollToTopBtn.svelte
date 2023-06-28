<script>
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import FaArrowUp from 'svelte-icons/fa/FaArrowUp.svelte';
	import { fade } from 'svelte/transition';

	let scrollPosition = 0;

	const listenToScroll = () => {
		scrollPosition = window.scrollY;
	};

	if (browser) {
		onMount(() => {
			window.addEventListener('scroll', listenToScroll);
		});

		onDestroy(() => {
			window.removeEventListener('scroll', listenToScroll);
		});
	}
</script>

{#if scrollPosition > 150}
	<button
		transition:fade
		class="fixed bottom-12 right-5 z-50 h-9 w-9 rounded-full bg-teal-700 p-1.5 text-white shadow-md transition-all duration-300 hover:bg-teal-600"
		on:click={() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}}
	>
		<FaArrowUp />
	</button>
{/if}

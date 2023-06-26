<script>
	import FaHamburger from 'svelte-icons/fa/FaHamburger.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let open = false;

	function toggle() {
		open = !open;
	}

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			open = false;
		}
	});
</script>

<div on:click={toggle} class="h-6 w-6 text-green-700">
	<FaHamburger />
</div>

{#if open}
	<nav
		in:fly={{
			duration: 100,
			x: -100
		}}
		out:fly={{
			duration: 100,
			x: -100
		}}
		class="hamburger-menu absolute left-0 top-0 z-50 h-screen w-1/3 opacity-100"
	>
		<ul class="h-full w-full bg-green-900">
			<a href="/" class="px-2 py-2">Home</a>
			<a class="px-2 py-2">Home</a>
			<a class="px-2 py-2">Home</a>
		</ul>
	</nav>
{/if}
{#if open}
	<div
		class="absolute right-0 top-0 z-40 h-screen w-screen bg-slate-900 opacity-40"
		on:click={toggle}
	/>
{/if}

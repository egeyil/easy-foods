<script>
	//@ts-ignore
	import FaHamburger from 'svelte-icons/fa/FaHamburger.svelte';
	import FaCaretDown from 'svelte-icons/fa/FaCaretDown.svelte';
	import FaLongArrowAltRight from 'svelte-icons/fa/FaLongArrowAltRight.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	export let open = false;

	function toggle() {
		open = !open;
	}

	if (browser) {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				open = false;
			}
		});
	}

	afterNavigate(() => {
		open = false;
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
		class="hamburger-menu absolute left-0 top-0 z-50 h-screen w-5/12 opacity-100"
	>
		<ul class="flex h-full w-full flex-col bg-green-900 text-stone-100">
			<li class="px-5 py-2.5">
				<div on:click={toggle} class="h-6 w-6 text-stone-100">
					<FaHamburger />
				</div>
			</li>
			<a href="/" class="px-2 py-2 text-stone-100">
				<button class="flex items-center gap-1">
					<div class="h-4 w-4">
						<FaLongArrowAltRight />
					</div>
					Home
				</button>
			</a>
			<li class="px-2 py-2 text-stone-100">
				<button class="flex items-center gap-1">
					<div class="h-4 w-4">
						<FaCaretDown />
					</div>
					Categories
				</button>
			</li>
			<a href="/explore" class="px-2 py-2 text-stone-100">
				<button class="flex items-center gap-1">
					<div class="h-4 w-4">
						<FaLongArrowAltRight />
					</div>
					Explore
				</button>
			</a>
      <a href="/about" class="px-2 py-2 text-stone-100">
				<button class="flex items-center gap-1">
					<div class="h-4 w-4">
						<FaLongArrowAltRight />
					</div>
					About
				</button>
			</a>
		</ul>
	</nav>
{/if}
{#if open}
	<div
		class="absolute right-0 top-0 z-40 h-screen w-screen bg-slate-900 opacity-40"
		on:click={toggle}
	/>
{/if}

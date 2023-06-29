<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	
	import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';

	let open = false;

	const handleClick = () => {
		open = !open;
	};

	$: console.log(open);

	$: {
		if (browser) {
			if (open) {
				document.addEventListener('click', handleClickOutside);
			} else {
				document.removeEventListener('click', handleClickOutside);
			}
		}
	}

	afterNavigate(() => {
		open = false;
	});

	const handleClickOutside = (event: Event) => {
		if (!(event?.target as HTMLButtonElement)?.closest('.profile')) {
			open = false;
		}
	};
</script>

<div class="profile relative">
	<button class="h-6 w-6 text-amber-600 hover:text-amber-900" on:click={handleClick}>
		<FaRegUser />
	</button>
	{#if open}
		<ul
			class="absolute z-30 left-0 flex -translate-x-1/2 translate-y-3 transform flex-col gap-1 overflow-hidden rounded-md border border-stone-300 bg-white shadow-md"
		>
			<a
				class="px-3 py-3 text-stone-600 transition-colors hover:bg-stone-100 hover:text-amber-700"
				href="/profile">Profile</a
			>
			<a
				class="px-3 py-3 text-stone-600 transition-colors hover:bg-stone-100 hover:text-amber-700"
				href="/logout">Logout</a
			>
		</ul>
	{/if}
</div>

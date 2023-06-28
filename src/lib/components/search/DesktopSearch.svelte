<script lang="ts">
	import { goto } from '$app/navigation';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';

	let searchText = '';

	const handleSearch = async () => {
		if (searchText === '') {
			return;
		}
		await goto(`/search?q=${searchText.toLocaleLowerCase()}`);

		searchText = '';
	};
</script>

<div
	class="hidden items-center justify-center rounded-md border border-transparent bg-stone-100 px-1 py-1 transition-colors duration-150 focus-within:border-stone-600 hover:border-stone-600 sm:flex"
>
	<button
		on:click={handleSearch}
		class="block h-4 w-4 text-amber-600 hover:text-amber-900"
	>
		<FaSearch />
	</button>
	<input
		type="text"
		class="w-48 bg-stone-100 px-2 text-stone-600 placeholder:text-stone-500 focus:text-stone-900 focus:outline-none"
		placeholder="Search recipes..."
		bind:value={searchText}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				handleSearch();
			}
		}}
	/>
</div>

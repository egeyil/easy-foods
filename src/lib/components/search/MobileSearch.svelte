<script>
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';

	let clicked = false;

	function handleClick() {
		clicked = !clicked;
	}
</script>

<div class="flex items-center sm:hidden">
	<button type="button" class="focus:outline-none">
		<p class="sr-only">Search</p>
		<i on:click={handleClick} class="block h-6 w-6 text-green-700 hover:text-stone-900">
			<FaSearch />
		</i>
	</button>
	<input
		type="text"
		class="{clicked
			? ''
			: 'hidden'} z-50 w-screen text-stone-600 placeholder:text-stone-500 focus:text-stone-900 focus:outline-none"
		placeholder="Search recipes..."
	/>
</div>

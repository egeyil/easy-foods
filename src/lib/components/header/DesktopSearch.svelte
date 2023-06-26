<script>
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
</script>

<div class="hidden sm:flex items-center">
	<button type="button" class="focus:outline-none">
		<p class="sr-only">Search</p>
		<i class="block h-6 w-6 text-slate-600 hover:text-slate-900">
			<FaSearch  />
		</i>
	</button>
	<input
		type="text"
		class="ml-2 hidden w-64 border-b border-b-transparent py-2 pl-2 pr-4 text-slate-600 transition-colors duration-150 placeholder:text-slate-500 hover:border-b-slate-500 focus:border-b-slate-500 focus:text-slate-900 focus:outline-none sm:block"
		placeholder="Search recipes..."
	/>
</div>

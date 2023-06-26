<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const categories = data?.categories;
</script>

{#each categories as category}
	<h2 class="text-semibold mb-6 mt-12 border-b border-b-slate-600 pb-2 text-2xl">
    {category.name}
	</h2>
{/each}

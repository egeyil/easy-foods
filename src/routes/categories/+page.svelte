<script lang="ts">
	import type { PageData } from './$types';
	import CategoryCard from '$lib/components/previews/CategoryCard.svelte';

	export let data: PageData;

	const categories = data?.categories;
</script>

<h2>All Categories</h2>
<section class="grid grid-cols-3 gap-3">
	{#each categories as category}
		<CategoryCard {...category} />
	{/each}
</section>

<script lang="ts">
	import type { PageData } from './$types';
	import RecipeCard from '$lib/components/previews/RecipeCard.svelte';
	import RecipeGrid from '$lib/components/previews/RecipeGrid.svelte';
	import CategoryImage from '$lib/components/previews/CategoryImage.svelte';

	export let data: PageData;

	$: category = data?.category;
</script>

<CategoryImage numRecipes={category._count.recipes} image={category.image} name={category.name} />
<RecipeGrid>
	{#each category.recipes as recipe}
		<RecipeCard {...recipe} liked={false} />
	{/each}
</RecipeGrid>

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
		<RecipeCard
			title={recipe.title}
			image={recipe.image ||
				'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'}
			liked={false}
			link={`/recipes/${recipe.id}`}
			ratingsCount={recipe.ratingsCount}
			commentsCount={recipe._count?.comments}
			category={recipe.category?.name}
		/>
	{/each}
</RecipeGrid>

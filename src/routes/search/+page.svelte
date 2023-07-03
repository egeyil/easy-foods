<script lang="ts">
	import type { PageData } from './$types';
	import RecipeGrid from '$lib/components/previews/RecipeGrid.svelte';
	import RecipeCard from '$lib/components/previews/RecipeCard.svelte';

	export let data: PageData;
</script>

<RecipeGrid>
	{#each data.recipes as recipe (recipe.id)}
		<RecipeCard 
			{...recipe}
      bookmarked={false}
		/>
	{/each}
</RecipeGrid>

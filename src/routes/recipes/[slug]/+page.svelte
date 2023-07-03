<script lang="ts">
	import RecipeContent from '$lib/components/recipe/RecipeContent.svelte';
	import type { PageData } from './$types';
	import { capitalize } from '$lib/client/helpers';
	import Stars from '$lib/components/general/Stars.svelte';

	export let data: PageData;

	const recipe = data?.recipe;
</script>

<section class="mb-6 flex gap-10 rounded-md bg-stone-200 px-3 py-4">
	{#if recipe.image}
		<img class="w-80 rounded-md object-cover" src={recipe.image} alt={recipe.title} />
	{/if}
	<div class="flex flex-col justify-between">
		<div class="flex items-start justify-between">
			<h2>{recipe.title}</h2>
			<Stars rating={recipe.rating} />
		</div>
		<section class="flex flex-col gap-4">
			<p class="line-clamp-4">
				<i
					>{recipe.description ||
						"Indulge your taste buds in a symphony of flavors with this tantalizing recipe for Sizzling Cajun Shrimp with Spicy Mango Salsa. The combination of succulent shrimp, rich Cajun spices, and vibrant mango salsa creates a culinary masterpiece that will transport you to the sunny shores of Louisiana. This dish is perfect for any occasion, whether it's a relaxed family dinner or an impressive gathering with friends. So, let's dive into the world of Cajun cuisine and discover the magic behind this delectable recipe."}</i
				>
			</p>
			<ul class=" mr-auto grid grid-cols-2 gap-3">
				<li>🎯 {capitalize(recipe.difficulty.toLocaleLowerCase())}</li>
				<li>⏲️ {recipe.time || '30 Minutes'}</li>
				<li>🍽️ {recipe.servings || 4} Servings</li>
				{#each recipe.tags as tag (tag.id)}
					<li>#️⃣ {tag.name}</li>
				{/each}
			</ul>
		</section>
	</div>
	<!-- {#if recipe.description}
	{/if} -->
</section>
<!-- <RecipeContent {...recipe} /> -->


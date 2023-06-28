<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const recipe = data?.recipe;

	let capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
</script>

<section class="flex gap-10 rounded-md mb-6 bg-stone-200 px-3 py-4">
	<img class="w-80 rounded-md object-cover" src={recipe.image} alt={recipe.title} />
	<div class="flex flex-col justify-between">
		<h2>{recipe.title}</h2>
		<section class="flex flex-col">
			<p class="mb-4 line-clamp-4">
				<i
					>{recipe.description ||
						"Indulge your taste buds in a symphony of flavors with this tantalizing recipe for Sizzling Cajun Shrimp with Spicy Mango Salsa. The combination of succulent shrimp, rich Cajun spices, and vibrant mango salsa creates a culinary masterpiece that will transport you to the sunny shores of Louisiana. This dish is perfect for any occasion, whether it's a relaxed family dinner or an impressive gathering with friends. So, let's dive into the world of Cajun cuisine and discover the magic behind this delectable recipe."}</i
				>
			</p>
			<aside class="grid grid-cols-2 gap-3">
				<p>🎯 {capitalize(recipe.difficulty.toLocaleLowerCase())}</p>
				<p>⏲️ {recipe.time || "30 Minutes"}</p>
				<p>🍽️ {recipe.servings || 4} Servings</p>
				<p>#️⃣ {recipe.tags || "Cheap, Fast, Lezizo"}</p>
			</aside>
		</section>
	</div>
	<!-- {#if recipe.description}
	{/if} -->
</section>

<article class="">
	<aside>
		{recipe.steps}
	</aside>
	<p>
		{recipe.content}
	</p>	
</article>

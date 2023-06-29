<script lang="ts">
	import { capitalize } from '$lib/client/helpers';
  import Stars from '$lib/components/general/Stars.svelte';

	export let image: string | null;
	export let title: string;
	export let description: string | null;
	export let difficulty: string;
	export let time: string | null;
	export let servings: number | null;
	export let tags: string | null;
	export let rating: number;
</script>

<section class="mb-6 flex gap-10 rounded-md bg-stone-200 px-3 py-4">
	{#if image}
		<img class="w-80 rounded-md object-cover" src={image} alt={title} />
	{/if}
	<div class="flex flex-col justify-between">
		<div class="flex justify-between items-start">
			<h2>{title}</h2>
			<Stars rating={rating} />
		</div>
		<section class="flex flex-col">
			<p class="mb-4 line-clamp-4">
				<i
					>{description ||
						"Indulge your taste buds in a symphony of flavors with this tantalizing recipe for Sizzling Cajun Shrimp with Spicy Mango Salsa. The combination of succulent shrimp, rich Cajun spices, and vibrant mango salsa creates a culinary masterpiece that will transport you to the sunny shores of Louisiana. This dish is perfect for any occasion, whether it's a relaxed family dinner or an impressive gathering with friends. So, let's dive into the world of Cajun cuisine and discover the magic behind this delectable recipe."}</i
				>
			</p>
			<aside class="grid grid-cols-2 gap-3">
				<p>🎯 {capitalize(difficulty.toLocaleLowerCase())}</p>
				<p>⏲️ {time || '30 Minutes'}</p>
				<p>🍽️ {servings || 4} Servings</p>
				<p>#️⃣ {tags || 'Cheap, Fast, Lezizo'}</p>
			</aside>
		</section>
	</div>
	<!-- {#if recipe.description}
	{/if} -->
</section>

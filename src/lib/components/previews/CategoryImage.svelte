<script lang="ts">
	import breakfast from '$lib/assets/breakfast.jpg';
	export let image: string | null;
	export let name: string;
	export let numRecipes: number;
</script>

<div class="relative mb-6 w-full overflow-hidden rounded-md">
	<img src={breakfast} alt={name} class=" h-64 w-full object-cover" />
	<div
		class="absolute bottom-0 flex h-full w-full flex-col justify-end bg-gradient-to-b from-transparent to-black text-left"
	>
		<h2 class="flex items-center justify-between mb-2 ml-2 mr-2 border-none text-white">
			{name}
			<p class="float-right">{numRecipes} {numRecipes === 1 ? 'Recipe' : 'Recipes'}</p>
		</h2>
	</div>
</div>

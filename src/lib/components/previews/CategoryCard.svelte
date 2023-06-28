<script lang="ts">
  export let name: string;
  export let image: string | null;
  export let _count: { recipes: number };

</script>

<a
	href="/{name.toLocaleLowerCase()}"
	class="overflow-hidden rounded-md bg-stone-50 shadow-md"
>
	<img
		src={image ||
			'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'}
		alt={name}
		class="h-48 w-full object-cover"
	/>
	<div class="px-3 py-1 text-center">
		<h2 class="text-2xl text-stone-700">
			{name}
		</h2>
		<p class="text-sm text-stone-600">{_count.recipes} Recipes</p>
	</div>
</a>

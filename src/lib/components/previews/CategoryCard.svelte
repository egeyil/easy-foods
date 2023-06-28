<script lang="ts">
	import { onMount } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let id: string;
	export let name: string;
	export let image: string | null;
	export let _count: { recipes: number };

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<a
		in:fly={{ y: 100, duration: 400, easing: quadOut, delay: 100 }}
		href="/categories/{id}"
		class="overflow-hidden rounded-md shadow transition-all duration-150 hover:shadow-md"
	>
		<img
			src={image ||
				'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'}
			alt={name}
			class="h-48 w-full object-cover"
		/>
		<div class="px-3 py-2 text-center">
			<h3 class="text-2xl text-stone-700">
				{name}
			</h3>
			<p class="text-sm text-stone-600">
				{_count.recipes}
				{_count.recipes === 1 ? 'Recipe' : 'Recipes'}
			</p>
		</div>
	</a>
{/if}

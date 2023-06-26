<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let title: string;
	export let image: string;
	export let link: string;
	export let ratingsCount: number;
	export let liked: boolean;
	export let category: string = 'Category';
	export let commentsCount: number = 0;

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div
		in:fly={{ y: 100, duration: 500 }}
		class="max-w-72 group relative select-none overflow-hidden bg-white shadow transition-all duration-150 hover:shadow-md"
	>
		<button
			class="absolute right-2 top-2 z-10 text-2xl"
			on:click={() => {
				liked = !liked;
			}}
		>
			{#if liked === true}
				<div class="text-red-700 hover:text-red-800" />
			{:else}
				<div class="text-slate-700 hover:text-red-700" />
			{/if}
		</button>
		<a href={link} class="group w-full overflow-hidden">
			<div class="h-80 w-full overflow-hidden">
				<img
					src={image}
					alt="Picture of recipe {title}"
					class="h-80 w-full object-cover transition-all duration-300 hover:scale-105"
				/>
			</div>
			<div class="w-full px-2 py-1.5">
				<h4 class="text-sm font-medium text-slate-700">{category}</h4>
				<div
					class="mt-1.5 line-clamp-2 w-full text-xl font-semibold text-slate-800 decoration-amber-700 decoration-1 underline-offset-4 transition-colors duration-150 group-hover:underline"
				>
					{title}
				</div>
				<div class="mb-1 mt-2 flex items-center gap-2">
					<div class="flex items-center text-xs text-slate-800 xl:text-sm">
						{ratingsCount} ratings
					</div>
					<div class="flex items-center text-xs text-slate-800 xl:text-sm">
						{commentsCount} comments
					</div>
				</div>
			</div>
		</a>
	</div>
{/if}

<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
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
	<article
		in:fly={{ y: 100, duration: 400, easing: quadOut, delay: 100 }}
		class="max-w-72 group relative select-none overflow-hidden rounded-md bg-white shadow transition-all duration-150 hover:shadow-md"
	>
		<!-- Like Button -->
		<button
			class="absolute right-2 top-2 z-10 text-2xl"
			on:click={() => {
				liked = !liked;
			}}
		>
			{#if liked === true}
				<div class="text-red-700 hover:text-red-800" />
			{:else}
				<div class="text-stone-700 hover:text-red-700" />
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
			<section class="w-full px-2 py-1.5">
				<h4>{category}</h4>
				<h3
					class="mt-1.5 line-clamp-2 w-full text-xl font-semibold text-stone-800 decoration-amber-700 decoration-1 underline-offset-4 transition-colors duration-150 group-hover:underline"
				>
					{title}
				</h3>
				<aside class="mb-1 mt-2 flex items-center gap-2">
					<p class="flex items-center text-xs text-stone-800 xl:text-sm">
						{ratingsCount} ratings
					</p>
					<p class="flex items-center text-xs text-stone-800 xl:text-sm">
						{commentsCount} comments
					</p>
				</aside>
			</section>
		</a>
	</article>
{/if}

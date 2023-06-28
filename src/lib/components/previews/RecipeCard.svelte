<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import calculateStars from '$lib/client/calculateStars';
	// @ts-ignore
	import FaRegBookmark from 'svelte-icons/fa/FaRegBookmark.svelte';
	import FaBookmark from 'svelte-icons/fa/FaBookmark.svelte';
	import FaShareAlt from 'svelte-icons/fa/FaShareAlt.svelte';
	import FaStar from 'svelte-icons/fa/FaStar.svelte';
	import FaStarHalfAlt from 'svelte-icons/fa/FaStarHalfAlt.svelte';
	import FaRegStar from 'svelte-icons/fa/FaRegStar.svelte'

	export let id: string;
	export let title: string;
	export let image: string | null;
	export let ratingsCount: number;
	export let rating: number;
	export let bookmarked: boolean = false;
	export let category: { name: string };
	export let commentsCount: number = 0;

	const { filledStarArray, emptyStarArray, halfStar } = calculateStars(rating);

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
		<!-- Bookmark Button -->
		<button
			class="absolute left-0 top-0 z-10 h-9 w-9 text-2xl {bookmarked
				? 'text-amber-800'
				: 'text-stone-700'} rounded-br-md bg-white bg-opacity-80 px-1 py-1 transition-colors duration-150 hover:bg-opacity-100 hover:text-amber-900"
			on:click={() => {
				bookmarked = !bookmarked;
			}}
		>
			{#if bookmarked === true}
				<FaBookmark />
			{:else}
				<FaRegBookmark />
			{/if}
		</button>
		<a href="/recipes/{id}" class="group w-full overflow-hidden">
			<div class="h-80 w-full overflow-hidden">
				<img
					draggable="false"
					src={image ||
						'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'}
					alt="Picture of recipe {title}"
					class="h-80 w-full object-cover transition-all duration-300"
				/>
			</div>
			<section class="w-full px-2 py-1.5">
				<div class="flex items-center justify-between">
					<h4>{category?.name}</h4>
					<div class="flex w-20 gap-0.5 text-yellow-300">
						{#each filledStarArray as star}
							<FaStar />
						{/each}
						{#if halfStar}
							<FaStarHalfAlt />
						{/if}
						{#each emptyStarArray as star}
							<FaRegStar />
						{/each}
					</div>
				</div>
				<h3
					class="mt-1.5 line-clamp-2 w-full text-xl font-semibold text-stone-800 decoration-amber-700 decoration-1 underline-offset-4 transition-colors duration-150 group-hover:underline"
				>
					{title}
				</h3>
				<aside class="mb-1 mt-2 flex items-center justify-between">
					<div class="flex items-center gap-4">
						<p class="flex items-center text-xs text-stone-800 xl:text-sm">
							{ratingsCount} ratings
						</p>
						<p class="flex items-center text-xs text-stone-800 xl:text-sm">
							{commentsCount} comments
						</p>
					</div>
					<button
						class="h-6 w-6 px-1 py-1 text-amber-600 hover:text-amber-700"
						on:click={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
					>
						<FaShareAlt />
					</button>
				</aside>
			</section>
		</a>
	</article>
{/if}

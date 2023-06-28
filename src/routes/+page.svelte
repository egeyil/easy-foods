<script lang="ts">
	import RecipeCard from '$lib/components/previews/RecipeCard.svelte';
	import RecipeGrid from '$lib/components/previews/RecipeGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.sections as section}
	{#if section?.posts?.length > 0}
		<h2 class="text-semibold mb-6 border-b border-b-slate-600 pb-2 text-2xl">
			{section.title}
		</h2>
		<RecipeGrid>
			{#each section.posts as post}
				<RecipeCard
					title={post.title}
					image={post.image ||
						'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
					link={'/recipes/' + post.id}
					ratingsCount={post.ratingsCount}
					commentsCount={post._count.comments}
					liked={false}
				/>
			{/each}
		</RecipeGrid>
	{/if}
{/each}

<!-- 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' -->

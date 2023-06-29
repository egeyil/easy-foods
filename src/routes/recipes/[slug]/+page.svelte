<script lang="ts">
	import RecipeIntroduction from '$lib/components/recipe/RecipeIntroduction.svelte';
import type { PageData } from './$types';

	export let data: PageData;

	const recipe = data?.recipe;


</script>

<RecipeIntroduction {...recipe} />
<article class="">
	<aside>
		{recipe.steps}
	</aside>
	<p>
		{recipe.content}
	</p>
</article>

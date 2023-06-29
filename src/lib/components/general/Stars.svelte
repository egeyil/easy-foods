<script lang="ts">
	// @ts-ignore
	import FaStar from 'svelte-icons/fa/FaStar.svelte';
	// @ts-ignore
	import FaStarHalfAlt from 'svelte-icons/fa/FaStarHalfAlt.svelte';
	// @ts-ignore
	import FaRegStar from 'svelte-icons/fa/FaRegStar.svelte';
  import { calculateStars } from '$lib/client/helpers';

  export let rating: number;

  const { filledStarArray, emptyStarArray, halfStar } = calculateStars(rating);

</script>

<div class="flex w-20 gap-0.5 text-amber-400">
	{#each filledStarArray as star}
		<FaStar />
	{/each}
	{#if halfStar}
		<FaStarHalfAlt />
	{/if}
	{#each emptyStarArray as star}
		<FaRegStar class="fill-slate-900" />
	{/each}
</div>

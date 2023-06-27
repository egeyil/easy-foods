<script lang="ts">
	//@ts-ignore
	import NavbarCategories from '$lib/components/navbar/NavbarCategories.svelte'
	import MobileSearch from '$lib/components/search/MobileSearch.svelte';
</script>

<nav
	class="sticky top-0 z-20 border-b border-b-stone-300 bg-cyan-100 px-2 text-xl sm:gap-12"
>
	<div class="flex items-center justify-center gap-8 md:gap-16">
		<a href="/" class="py-2.5 sm:py-3.5"> Home </a>
		<NavbarCategories />
		<a href="/explore" class="py-2.5 sm:py-3.5"> Explore </a>
		<MobileSearch />
	</div>
</nav>

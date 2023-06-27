<script lang="ts">
	//@ts-ignore
	import NavbarCategories from '$lib/components/navbar/NavbarCategories.svelte';
	import MobileSearch from '$lib/components/search/MobileSearch.svelte';
	import HamburgerMenu from '$lib/components/navbar/HamburgerMenu.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
</script>

<nav class="px-5 py-2.5 flex items-center justify-between sticky top-0 z-20 border-b border-b-slate-300 bg-white text-lg sm:hidden">
	<HamburgerMenu />
	<div class="flex items-center justify-center gap-8 md:gap-16">
		<Logo />
	</div>
	<MobileSearch />
</nav>

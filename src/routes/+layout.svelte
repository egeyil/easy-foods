<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import DesktopNavbar from '$lib/components/navbar/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/navbar/MobileNavbar.svelte';
	import ScrollToTopBtn from '$lib/components/general/ScrollToTopBtn.svelte';
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;

	const categories = data?.categories;
</script>

<svelte:head>
	<title>Easy Foods!</title>
	<meta name="description" content="Finding good recipes made fun." />
</svelte:head>

<Header />
<DesktopNavbar {categories} />
<MobileNavbar />
<main class="mx-auto mb-4 mt-10 w-full px-5 md:w-3/4 md:px-0 xl:w-1/2">
	<slot />
</main>
<ScrollToTopBtn />

<style lang="postcss">
	:global(html) {
		font-family: 'Montserrat', sans-serif;
	}
</style>

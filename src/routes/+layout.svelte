<script>
	import Header from '$lib/components/header/Header.svelte';
	import DesktopNavbar from '$lib/components/navbar/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/navbar/MobileNavbar.svelte';
	import ScrollToTopBtn from '$lib/components/general/ScrollToTopBtn.svelte';
	import '../app.css';
</script>

<Header />
<DesktopNavbar />
<MobileNavbar />
<main class="mx-auto mb-4 mt-2 w-full px-5 md:w-3/4 md:px-0">
	<slot />
</main>
<ScrollToTopBtn />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.teal.50);
		font-family: 'Montserrat', sans-serif;
		scroll-behavior: smooth;
	}
</style>

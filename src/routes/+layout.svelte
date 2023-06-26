<script>
	import Header from '$lib/components/header/Header.svelte';
	import DesktopNavbar from '$lib/components/navbar/DesktopNavbar.svelte';
	import MobileNavbar from '$lib/components/navbar/MobileNavbar.svelte';
	import '../app.css';
</script>

<Header />
<DesktopNavbar />
<MobileNavbar />
<main class="mx-auto mb-4 mt-2 w-full px-5 md:w-3/4 md:px-0">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.stone.50);
		font-family: 'Montserrat', sans-serif;
	}
</style>

<script>
	import Search from '$lib/components/header/DesktopSearch.svelte';
	import Logo from './Logo.svelte';
</script>

<header
	class="hidden sm:flex w-full items-center justify-between border-b border-b-slate-300 bg-white px-5 py-3 sm:px-7 md:px-10 md:py-5"
>
	<Logo />
	<Search />
</header>

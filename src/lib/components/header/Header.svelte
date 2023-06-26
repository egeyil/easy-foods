<script>
	import Search from '$lib/components/header/Search.svelte';
	import Logo from './Logo.svelte';
</script>

<header
	class="hidden sm:flex w-full items-center justify-between border-b border-b-slate-300 bg-white px-3 py-3 md:py-5"
>
	<Logo />
	<Search />
</header>

<script>
	import NavbarCategories from './NavbarCategories.svelte';
</script>

<nav
	class="sticky md:static top-0 z-20 bg-white flex items-center justify-center gap-8 sm:gap-12 md:gap-16 px-6 text-xl border-b border-b-slate-300"
>
	<a
		href="/"
		class="md:py-6"
	>
		Home
	</a>
	<NavbarCategories />
	<a href="/explore" class="md:py-6 ">
		Explore
	</a>
</nav>

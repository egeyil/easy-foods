<script>
	import Search from '$lib/components/search/DesktopSearch.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import ProfileButton from '$lib/components/profile/ProfileButton.svelte';
</script>

<header
	class="hidden sm:flex w-full items-center justify-between border-b border-b-stone-300 bg-teal-700 px-5 py-3 sm:px-7 md:px-10 md:py-5"
>
	<Logo />
	
	<div class="flex justify-center items-center gap-10">
		<Search />
		<ProfileButton />
	</div>
</header>

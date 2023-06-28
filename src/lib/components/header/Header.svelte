<script>
	import Search from '$lib/components/search/DesktopSearch.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import ProfileButton from '$lib/components/profile/ProfileButton.svelte';
</script>

<header
	class="hidden w-full items-center justify-between bg-teal-700 px-5 py-3 sm:flex sm:px-7 md:px-10 md:py-5"
>
	<Logo />

	<div class="flex items-center justify-center gap-10">
		<Search />
		<ProfileButton />
	</div>
</header>

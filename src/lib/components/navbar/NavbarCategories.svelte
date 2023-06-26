<script>
	const categoryTitles = [
		{ title: 'All', path: '/', icon: '' },
		{ title: 'Breakfast', path: '/breakfast', icon: '' },
		{
			title: 'Main Courses',
			path: '/main-courses',
			icon: ''
		},
		{ title: 'Desserts', path: '/desserts', icon: '' },
		{ title: 'Snacks', path: '/snacks', icon: '' },
		{ title: 'Drinks', path: '/drinks', icon: '' },
		{ title: 'Pantry', path: '/pantry', icon: '' },
		{ title: 'Tags', path: '/tags', icon: '' }
	];

	let selectedCategory = '';
</script>

<div class="group relative py-3 md:py-6">
	<a href="/categories" class="text-xl">Categories</a>
	<div
		class="absolute left-1/2 top-full z-50 hidden w-screen -translate-x-1/2 transform grid-cols-3 border-t border-t-slate-400 bg-white px-2 py-2 text-xl shadow-md transition-all duration-150 group-hover:grid sm:w-[500px]"
	>
		{#each categoryTitles as { title, path, icon } (title)}
			<a
				href={'/categories' + path}
				class="flex flex-col justify-between gap-3 py-3 pl-3"
			>
				{icon}
				{title}
			</a>
		{/each}
	</div>
</div>

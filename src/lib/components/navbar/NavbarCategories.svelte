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
		{ title: 'Tags', path: '/tags', icon: '' },
	];

	let selectedCategory = '';
</script>

<div class="group relative py-3 md:py-6">
	<h2 class="text-xl transition-colors duration-150 hover:text-orange-700">
		Categories
	</h2>
	<div
		class="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 transform grid-cols-3 bg-white px-2 py-2 text-xl shadow-md transition-all duration-150 group-hover:grid w-screen sm:w-[500px] border-t border-t-slate-400"
	>
		{#each categoryTitles as { title, path, icon } (title)}
			<a
				href={'/categories' + path}
				class="flex flex-col justify-between gap-3 py-3 pl-3 decoration-amber-700 decoration-1 underline-offset-4 transition-all duration-150 hover:text-amber-700 hover:underline"
			>
				{icon}
				{title}
			</a>
		{/each}
	</div>
</div>

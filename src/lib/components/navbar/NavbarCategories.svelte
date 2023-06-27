<script lang="ts">
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

<div class="dropdown-container relative hidden py-3.5 sm:block">
	<a href="/categories" class=""> Categories </a>
	<div
		class="dropdown-content absolute left-1/2 top-14 z-50 hidden w-screen -translate-x-1/2 transform grid-cols-3 border-t border-t-stone-400 bg-white text-xl shadow-md transition-all duration-150 sm:w-[500px] sm:px-2"
	>
		{#each categoryTitles as { title, path, icon } (title)}
			<a href={'/categories' + path} class="flex flex-col justify-between py-3 pl-3">
				{icon}
				{title}
			</a>
		{/each}
	</div>
</div>

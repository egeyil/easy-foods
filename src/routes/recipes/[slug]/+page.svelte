<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData; 

	const post = data?.post;
</script>

<h2 class="text-semibold mb-6 mt-12 border-b border-b-slate-600 pb-2 text-2xl">{post.title}</h2>
<p>
	{post.content}
</p>

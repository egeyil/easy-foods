import RecipeService from '$lib/server/services/post.service';

export async function load() {
	const Post = new RecipeService();
	const popularPosts = await Post.getPopularRecipes();
	const recentPosts = await Post.getRecentRecipes();

	console.log('popularPosts', popularPosts);
	console.log('recentPosts', recentPosts);


	return {
		sections: [
			{
				title: 'Popular Posts',
				posts: popularPosts
			},
			{
				title: 'Recent Posts',
				posts: recentPosts
			}
		]
	};
}

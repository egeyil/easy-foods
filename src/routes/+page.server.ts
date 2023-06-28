import RecipeService from '$lib/server/services/recipe.service';

export async function load() {
	const Post = new RecipeService();
	const popularPosts = await Post.getPopularRecipes();
	const recentPosts = await Post.getRecentRecipes();


	return {
		sections: [
			{
				title: 'Popular Recipes',
				posts: popularPosts
			},
			{
				title: 'Recent Recipes',
				posts: recentPosts
			}
		]
	};
}

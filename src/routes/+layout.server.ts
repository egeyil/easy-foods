import RecipeService from '$lib/server/services/recipe.service';

export async function load() {
	const Post = new RecipeService();
	const categories = await Post.getAllParentCategories();

	return {
		categories,
	};
}

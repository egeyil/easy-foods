import RecipeService from '$lib/server/services/recipe.service';
import { redirect } from '@sveltejs/kit';

export async function load() {
	const Post = new RecipeService();
	const categories = await Post.getAllCategories();

  if (!categories || categories.length === 0) {
    throw redirect(307, '/404');
  }

	return {
		categories,
	};
}

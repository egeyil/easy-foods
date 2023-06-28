import RecipeService from '$lib/server/services/recipe.service';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const Post = new RecipeService();

	const category = await Post.getCategory(params.slug);

	if (!category) {
		throw redirect(307, '/404');
	}

	return {
		category
	};
}

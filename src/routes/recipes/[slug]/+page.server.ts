import RecipeService from '$lib/server/services/recipe.service';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const Recipe = new RecipeService();
	const recipe = await Recipe.getRecipe(params.slug);

	if (!recipe) {
		throw redirect(307, '/404');
	}

	return {
		recipe
	};
}

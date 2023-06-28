import RecipeService from '$lib/server/services/recipe.service';

export async function load({ url }) {
	const params = url.searchParams;
	const Recipe = new RecipeService();

	let searchString = '';

	for (const [key, value] of params.entries()) {
		if (key === 'q') {
			searchString = value;
		}
	}

	const searchResult = await Recipe.searchRecipes(searchString);
	
	return {
		recipes: searchResult
	};

	// const post = await Recipe.getRecipe(params.slug);

	// if (!post) {
	// 	throw redirect(307, '/404');
	// }
}

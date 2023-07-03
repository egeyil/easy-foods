import prisma from '$lib/server/database';

class RecipeService {
	private previewRecipeFields = {
		id: true,
		title: true,
		createdAt: true,
		ratingsCount: true,
		rating: true,
		image: true,
		difficulty: true,
		tags: true,
		_count: {
			select: {
				comments: true
			}
		},
		category: {
			select: {
				name: true
			}
		}
	};

	private recipeSelectFields = {
		id: true,
		title: true,
		image: true,
		createdAt: true,
		updatedAt: true,
		description: true,
		rating: true,
		ratingsCount: true,
		difficulty: true,
		content: true,
		ingredients: true,
		steps: true,
		servings: true,
		time: true,
		tips: true
	};

	getPopularRecipes(userId?: string) {
		return prisma.recipe.findMany({
			where: {
				AND: {
					published: true,
					ratingsCount: {
						gt: 10
					}
				},
				favorites: {
					none: {
						id: userId
					}
				}
			},
			orderBy: {
				ratingsCount: 'desc'
			},
			take: 12,
			select: this.previewRecipeFields
		});
	}

	getRecentRecipes(userId?: string) {
		return prisma.recipe.findMany({
			where: {
				published: true,
				favorites: {
					none: {
						id: userId
					}
				}
			},
			orderBy: {
				createdAt: 'desc'
			},
			take: 12,
			select: this.previewRecipeFields
		});
	}

	getRecipe(slug: string, userId?: string) {
		return prisma.recipe.findUnique({
			where: {
				id: slug
			},
			select: {
				id: true,
				title: true,
				image: true,
				createdAt: true,
				updatedAt: true,
				description: true,
				rating: true,
				ratingsCount: true,
				difficulty: true,
				content: true,
				steps: true,
				servings: true,
				time: true,
				tips: true,
				comments: {
					take: 5,
					orderBy: {
						createdAt: 'desc'
					},
					select: {
						author: {
							select: {
								id: true,
								name: true,
								image: true
							}
						},
						id: true,
						createdAt: true,
						updatedAt: true,
						content: true,
						likes: true
					}
				},
				category: {
					select: {
						id: true,
						name: true
					}
				},
				favorites: {
					where: {
						id: userId
					},
					select: {
						id: true
					}
				},
				tags: {
					select: {
						id: true,
						name: true,
					}
				},
				ingredients: {
					select: {
						id: true,
						name: true,
					}
				},
				_count: {
					select: {
						comments: true,
						favorites: true
					}
				}
			}
		});
	}

	getAllParentCategories() {
		return prisma.category.findMany({
			where: {
				isSubCategory: false
			},
			select: {
				id: true,
				name: true,
				image: true,
				_count: {
					select: {
						recipes: true
					}
				}
			}
		});
	}

	getAllCategories() {
		return prisma.category.findMany({
			select: {
				id: true,
				name: true,
				image: true,
				_count: {
					select: {
						recipes: true
					}
				}
			}
		});
	}

	getCategory(slug: string) {
		return prisma.category.findUnique({
			where: {
				id: slug
			},
			select: {
				id: true,
				name: true,
				image: true,
				_count: {
					select: {
						recipes: true
					}
				},
				recipes: {
					take: 20,
					select: this.previewRecipeFields
				}
			}
		});
	}

	searchRecipes(query: string) {
		return prisma.recipe.findMany({
			where: {
				AND: [
					{
						OR: [
							{
								title: {
									contains: query
								}
							},
							{
								content: {
									contains: query
								}
							}
						]
					},
					{
						published: true
					}
				]
			},
			select: this.previewRecipeFields
		});
	}
}

export default RecipeService;

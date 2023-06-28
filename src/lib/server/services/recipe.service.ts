import prisma from '$lib/server/database';

class RecipeService {
	private previewRecipeFields = {
		id: true,
		title: true,
		createdAt: true,
		ratingsCount: true,
		image: true,
		difficulty: true,
		tags: true,
		category: {
			select: {
				name: true
			}
		},
		_count: {
			select: {
				comments: true
			}
		}
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

	getRecipe(slug: string, userId: string | undefined) {
		return prisma.recipe.findUnique({
			where: {
				id: slug
			},
			include: {
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
						content: true
					}
				},
				favorites: {
					where: {
						NOT: {
							id: userId
						}
					},
					select: {
						id: true
					}
				},
				_count: {
					select: {
						comments: true
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
}

export default RecipeService;

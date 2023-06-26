import prisma from '$lib/server/database';

class PostService {
	private previewPostFields = {
		id: true,
		title: true,
		createdAt: true,
		ratingsCount: true,
		image: true,
		difficulty: true,
		tags: true,
		_count: {
			select: {
				comments: true
			}
		}
	};

	getPopularPosts(userId: string) {
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
			select: this.previewPostFields
		});
	}

	getRecentPosts(userId: string) {
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
			select: this.previewPostFields
		});
	}

	getPost(slug: string, userId: string | undefined) {
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

	getAllCategories() {
		return prisma.category.findMany({
			select: {
				id: true,
				name: true
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
				posts: {
					take: 20,
					select: this.previewPostFields
				}
			}
		});
	}
}

export default PostService;

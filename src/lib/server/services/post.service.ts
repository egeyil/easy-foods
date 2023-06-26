import prisma from '$lib/server/database';

class PostService {
	getPopularPosts() {
		return prisma.post.findMany({
			where: {
				AND: {
					published: true,
					likesCount: {
						gt: 10
					}
				}
			},
			orderBy: {
				likesCount: 'desc'
			},
			take: 12,
			select: {
				id: true,
				title: true,
				createdAt: true,
				likesCount: true,
				image: true,
				_count: {
					select: {
						comments: true
					}
				}
			}
		});
	}

	getRecentPosts() {
		return prisma.post.findMany({
			where: {
				published: true
			},
			orderBy: {
				createdAt: 'desc'
			},
			take: 12,
			select: {
				id: true,
				title: true,
				createdAt: true,
				likesCount: true,
				image: true,
				_count: {
					select: {
						comments: true
					}
				}
			}
		});
	}

	getPost(slug: string) {
		return prisma.post.findUnique({
			where: {
				id: slug
			},
			select: {
				id: true,
				title: true,
				createdAt: true,
				updatedAt: true,
				likesCount: true,
				content: true,
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
				image: true,
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
					select: {
						id: true,
						title: true,
						createdAt: true,
						likesCount: true,
						image: true,
						_count: {
							select: {
								comments: true
							}
						}
					}
				}
			}
		});
	}
}

export default PostService;

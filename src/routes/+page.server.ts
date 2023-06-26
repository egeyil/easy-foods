import PostService from '$lib/server/services/post.service';

export async function load({ params, cookies }) {
	const Post = new PostService();
	const popularPosts = await Post.getPopularPosts();
	const recentPosts = await Post.getRecentPosts();

	return {
		sections: [
			{
				title: 'Popular Posts',
				posts: popularPosts
			},
			{
				title: 'Recent Posts',
				posts: recentPosts
			}
		]
	};
}

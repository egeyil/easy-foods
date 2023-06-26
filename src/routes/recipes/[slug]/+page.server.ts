import PostService from '$lib/server/services/post.service';
import { redirect } from '@sveltejs/kit';

export async function load({ params, cookies }) {
	const Post = new PostService();
	const post = await Post.getPost(params.slug);

  if (!post) {
    throw redirect(307, '/404');
  }

	return {
		post,
	};
}

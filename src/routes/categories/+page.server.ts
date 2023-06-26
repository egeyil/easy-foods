import PostService from '$lib/server/services/post.service';
import { redirect } from '@sveltejs/kit';

export async function load() {
	const Post = new PostService();
	const categories = await Post.getAllCategories();

  if (!categories || categories.length === 0) {
    throw redirect(307, '/404');
  }

	return {
		categories,
	};
}

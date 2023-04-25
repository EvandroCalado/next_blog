import { endpoints } from '../config/endpoints';
import { PostsStrapi } from '../typing/posts';
import { fetchJson } from '../utils/fetchJson';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostsStrapi> => {
  const url = `${process.env.API_URL}${endpoints.getOnePost}?filters[slug][$containsi]=${slug}`;
  const posts = await fetchJson<PostsStrapi>(url);

  return posts;
};

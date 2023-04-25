import { endpoints } from '../config/endpoints';
import { PostsStrapi } from '../typing/posts';
import { fetchJson } from '../utils/fetchJson';

export const getAllPosts = async (query = ''): Promise<PostsStrapi> => {
  const url = `${process.env.API_URL}${endpoints.getAllPosts}${query}`;
  const posts = await fetchJson<PostsStrapi>(url);

  return posts;
};

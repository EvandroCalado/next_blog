import { endpoints } from '../config/endpoints';
import { PostsStrapi } from '../typing/posts';
import { fetchJson } from '../utils/fetchJson';

export const getAllPosts = async (): Promise<PostsStrapi> => {
  const posts = await fetchJson<PostsStrapi>(
    `${process.env.API_URL}${endpoints.getAllPosts}`,
  );

  return posts;
};

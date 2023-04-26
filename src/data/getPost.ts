import { endpoints } from '../config/endpoints';
import { PostsStrapi } from '../typing/posts';
import { fetchJson } from '../utils/fetchJson';
import { markdownToHtml } from '../utils/markdownToHtml';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostsStrapi> => {
  const url = `${process.env.API_URL}${endpoints.getOnePost}?filters[slug][$containsi]=${slug}&populate=*`;
  const posts = await fetchJson<PostsStrapi>(url);

  const content = await markdownToHtml(posts.data[0].attributes.content);
  posts.data[0].attributes.content = content;

  return posts;
};

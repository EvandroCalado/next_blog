import request from 'graphql-request';
import { GET_POSTS } from '../graphql/queries';
import { PostsStrapi } from '../typing/posts';

export const getPosts = async (pagination = {}, variables = {}) => {
  const data = await request(process.env.GRAPHQL_URL as string, GET_POSTS, {
    ...pagination,
    ...variables,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { posts }: PostsStrapi | any = data;

  return posts;
};

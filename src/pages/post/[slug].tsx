import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/getAllPosts';
import { getPost } from '../../data/getPost';
import { PostStrapi } from '../../typing/posts';

export type PostProps = {
  post: PostStrapi;
};

const Post = ({ post }: PostProps) => {
  return <>{post.attributes.content}</>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug);

  return {
    props: {
      post: posts.data[0],
    },
    revalidate: 600,
  };
};

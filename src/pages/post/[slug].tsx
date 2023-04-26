import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/getAllPosts';
import { getPost } from '../../data/getPost';
import { PostStrapi } from '../../typing/posts';
import { getSettings } from '../../data/getSettings';
import { SettingsStrapi } from '../../typing/settings';
import PostTemplate from '../../templates/PostTemplate/PostTemplate';

export type PostProps = {
  post: PostStrapi;
  settings: SettingsStrapi;
};

const Post = ({ post, settings }: PostProps) => {
  const image = settings.data.attributes.avatar.data.attributes.url;
  const title = settings.data.attributes.title;
  const description = settings.data.attributes.description;
  const footer = settings.data.attributes.footer;

  return (
    <PostTemplate
      post={post}
      image={image}
      title={title}
      description={description}
      footer={footer}
    />
  );
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params?.slug);
  const settings = await getSettings();

  return {
    props: {
      post: posts.data[0],
      settings,
    },
    revalidate: 600,
  };
};

import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/getAllPosts';
import { getPost } from '../../data/getPost';
import { PostStrapi } from '../../typing/posts';
import { getSettings } from '../../data/getSettings';
import { SettingsStrapi } from '../../typing/settings';
import PostTemplate from '../../templates/Post';
import { useRouter } from 'next/router';
import Error from 'next/error';

export type PostProps = {
  post: PostStrapi;
  settings: SettingsStrapi;
};

const Post = ({ post, settings }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Página em construção...</div>;
  }

  if (!post?.attributes) return <Error statusCode={404} />;

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

  const post = posts.data.length > 0 ? posts.data[0] : {};

  return {
    props: {
      post,
      settings,
    },
    revalidate: 60,
  };
};

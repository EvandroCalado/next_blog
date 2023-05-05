import { GetStaticPaths, GetStaticProps } from 'next';
import { PostStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import PostTemplate from '../../templates/Post';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { getPosts } from '../../data/getPosts';
import { markdownToHtml } from '../../utils/markdownToHtml';
import { getSetting } from '../../data/getSetting';
import { mapSettings } from '../../data/mapSettings';

export type PostProps = {
  post: PostStrapi;
  settings: SettingsStrapi;
};

const Post = ({ post, settings }: PostProps) => {
  const router = useRouter();

  const settingsData = mapSettings(settings);

  if (router.isFallback) {
    return <div>Página em construção...</div>;
  }

  if (!post?.attributes) return <Error statusCode={404} />;

  return <PostTemplate post={post} settings={settingsData} />;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = null;

  try {
    posts = await getPosts();
  } catch (error) {
    console.log(error);
  }

  return {
    paths: posts.data.map((post: PostStrapi) => {
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
  let posts = null;
  let settings = null;

  try {
    posts = await getPosts({ slug: ctx.params?.slug });
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  const content = await markdownToHtml(posts.data[0].attributes.content);
  posts.data[0].attributes.content = content;

  const post = posts.data.length > 0 ? posts.data[0] : {};

  return {
    props: {
      post,
      settings,
    },
    revalidate: 60,
  };
};

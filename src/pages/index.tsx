import Showcase from '../templates/Home';
import { GetStaticProps } from 'next';
import { PostsStrapi } from '../typing/posts';
import { SettingsStrapi } from '../typing/settings';
import { getPosts } from '../data/getPosts';
import { getSetting } from '../data/getSetting';
import { PostsDataProps } from '../data/mapPosts';
import { SettingsDataProps } from '../data/mapSettings';

export type IndexProps = {
  posts: PostsStrapi;
  post: PostsStrapi;
  settings: SettingsStrapi;
};

const Index = ({ posts, post, settings }: IndexProps) => {
  return <Showcase posts={posts} settings={settings} post={post} />;
};

export default Index;

export type PostsAndSettingsDataProps = {
  posts: PostsDataProps;
  settings: SettingsDataProps;
};

export const getStaticProps: GetStaticProps<
  PostsAndSettingsDataProps
> = async () => {
  let posts = null;
  let post = null;
  let settings = null;

  try {
    posts = await getPosts({
      sort: 'createdAt:desc',
      start: 1,
      limit: 6,
    });
    post = await getPosts({
      sort: 'createdAt:desc',
      start: 0,
      limit: 0,
    });
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
      post,
      settings,
    },
    revalidate: 60,
  };
};

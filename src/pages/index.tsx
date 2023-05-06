import Home from '../templates/Home';
import { GetStaticProps } from 'next';
import { PostsStrapi } from '../typing/posts';
import { SettingsStrapi } from '../typing/settings';
import { getPosts } from '../data/getPosts';
import { getSetting } from '../data/getSetting';
import { PostsDataProps } from '../data/mapPosts';
import { SettingsDataProps } from '../data/mapSettings';

export type IndexProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const Index = ({ posts, settings }: IndexProps) => {
  return <Home posts={posts} settings={settings} />;
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
  let settings = null;

  try {
    posts = await getPosts();
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
      settings,
    },
    revalidate: 60,
  };
};

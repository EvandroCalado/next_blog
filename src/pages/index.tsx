import { GetStaticProps } from 'next';
import { PostsStrapi } from '../typing/posts';
import Home from '../templates/Home';
import { SettingsStrapi } from '../typing/settings';
import { getPosts } from '../data/getPosts';
import { getSetting } from '../data/getSetting';

export type IndexProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const Index = ({ posts, settings }: IndexProps) => {
  return <Home posts={posts} settings={settings} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
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

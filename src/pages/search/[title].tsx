import { GetServerSideProps } from 'next';
import { getPosts } from '../../data/getPosts';
import { getSetting } from '../../data/getSetting';
import { PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import Home from '../../templates/Home';

export type SearchProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const Search = ({ posts, settings }: SearchProps) => {
  return <Home posts={posts} settings={settings} />;
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let posts = null;
  let settings = null;

  try {
    posts = await getPosts(ctx.query);
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
      settings,
    },
  };
};

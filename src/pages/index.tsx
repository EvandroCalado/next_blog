import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/getAllPosts';
import { PostsStrapi } from '../typing/posts';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import { getSettings } from '../data/getSettings';
import { SettingsStrapi } from '../typing/settings';

export type HomeProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const Home = ({ posts, settings }: HomeProps) => {
  return <HomeTemplate posts={posts} settings={settings} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('?populate=*&sort=id:desc');
  const settings = await getSettings();

  // &filters[title][$containsi]=typescript para busca
  // &pagination[pageSize]=3&pagination[page]=1 paginação

  return {
    props: {
      posts,
      settings,
    },
    revalidate: 600,
  };
};

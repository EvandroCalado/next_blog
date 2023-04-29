import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/getAllPosts';
import { PostsStrapi } from '../typing/posts';
import HomeTemplate from '../templates/Home';
import { getSettings } from '../data/getSettings';
import { SettingsStrapi } from '../typing/settings';

export type IndexProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const Index = ({ posts, settings }: IndexProps) => {
  return <HomeTemplate posts={posts} settings={settings} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const sortQuery = `?populate=*&sort=id:desc`;
  const paginationQuery = `&pagination[start]=0&pagination[limit]=6`;

  const posts = await getAllPosts(`${sortQuery}${paginationQuery}`);
  const settings = await getSettings();

  // &filters[title][$containsi]=typescript para busca
  // &pagination[pageSize]=3&pagination[page]=1 paginação

  return {
    props: {
      posts,
      settings,
    },
    revalidate: 60,
  };
};

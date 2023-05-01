import { GetServerSideProps } from 'next';
import { PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import { getAllPosts } from '../../data/getAllPosts';
import { getSettings } from '../../data/getSettings';
import Home from '../../templates/Home';

export type CategoriesProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  category?: string;
};

const Categories = ({ posts, settings, category }: CategoriesProps) => {
  return <Home posts={posts} settings={settings} category={category} />;
};

export default Categories;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sortQuery = `?populate=*&sort=id:desc`;
  const categoryQuery = `&filters[categories][name][$containsi]=${ctx.query.category}`;
  const paginationQuery = `&pagination[start]=0&pagination[limit]=6`;

  const posts = await getAllPosts(
    `${sortQuery}${categoryQuery}${paginationQuery}`,
  );
  const settings = await getSettings();

  return {
    props: {
      posts,
      settings,
      category: ctx.query.category,
    },
  };
};
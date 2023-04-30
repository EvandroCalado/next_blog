import { GetStaticPaths, GetStaticProps } from 'next';
import Home from '../../../templates/Home';
import { PaginationNext, PostsStrapi } from '../../../typing/posts';
import { SettingsStrapi } from '../../../typing/settings';
import { useRouter } from 'next/router';
import { getPosts } from '../../../data/getPosts';
import { getSetting } from '../../../data/getSetting';

export type PageProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  category?: string;
  pagination: PaginationNext;
};

const Page = ({ posts, settings, category, pagination }: PageProps) => {
  const router = useRouter();

  if (router.isFallback) return <div>Página carregando...</div>;
  if (!posts.data.length) return <div>Página não encontrada</div>;

  return (
    <Home
      posts={posts}
      settings={settings}
      category={category}
      pagination={pagination}
    />
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params?.param?.[0]);
  const category = ctx.params?.param?.[1] || '';
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previusPage = page - 1;

  // const sortQuery = `?populate=*&sort=id:desc`;
  // const categoryQuery = category
  //   ? `&filters[categories][name][$containsi]=${category}`
  //   : '';
  // const paginationQuery = `&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}`;

  // const posts = await getAllPosts(
  //   `${sortQuery}${paginationQuery}${categoryQuery}`,
  // );
  // const settings = await getSettings();

  // const numberOfPosts = posts.meta.pagination.total;

  let posts = null;
  let settings = null;

  try {
    posts = await getPosts(
      {
        sort: 'createdAt:desc',
        start: startFrom,
        limit: postsPerPage,
      },
      { category },
    );
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  const pagination: PaginationNext = {
    nextPage,
    previusPage,
    numberOfPosts: posts.meta.pagination.total,
    postsPerPage,
    category,
  };

  return {
    props: {
      posts,
      settings,
      pagination,
      category,
    },
    revalidate: 60,
  };
};

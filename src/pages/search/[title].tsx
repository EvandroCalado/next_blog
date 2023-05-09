import { GetServerSideProps } from 'next';
import { getPosts } from '../../data/getPosts';
import { getSetting } from '../../data/getSetting';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import Home from '../../templates/Posts';
import { PostsAndSettingsDataProps } from '..';

export type SearchProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  pagination: PaginationNext;
};

const Search = ({ posts, settings, pagination }: SearchProps) => {
  return <Home posts={posts} settings={settings} pagination={pagination} />;
};

export default Search;

export const getServerSideProps: GetServerSideProps<
  PostsAndSettingsDataProps
> = async (ctx) => {
  const page = Number(ctx.query.page);
  const title = ctx.query.title;
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previusPage = page - 1;

  let posts = null;
  let settings = null;

  try {
    posts = await getPosts(
      {
        sort: 'createdAt:desc',
        start: startFrom,
        limit: postsPerPage,
      },
      { title },
    );
    settings = await getSetting();
  } catch (error) {
    console.log(error);
  }

  const pagination = {
    nextPage,
    previusPage,
    numberOfPosts: posts.meta.pagination.total,
    postsPerPage,
    title,
  };

  return {
    props: {
      posts,
      settings,
      pagination,
    },
  };
};

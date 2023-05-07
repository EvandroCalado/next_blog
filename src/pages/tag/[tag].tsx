import Home from '../../templates/Home';
import { GetServerSideProps } from 'next';
import { getPosts } from '../../data/getPosts';
import { getSetting } from '../../data/getSetting';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';

export type CategoryProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  pagination: PaginationNext;
  author: string;
  tag: string;
};

const Tag = ({ posts, settings, pagination, author, tag }: CategoryProps) => {
  return (
    <Home
      posts={posts}
      settings={settings}
      pagination={pagination}
      author={author}
      tag={tag}
    />
  );
};

export default Tag;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = Number(ctx.query.page);
  const tag = ctx.query.tag || '';
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
      { tag },
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
    tag,
  };

  return {
    props: {
      posts,
      settings,
      pagination,
      category: null,
      author: null,
      tag,
    },
  };
};

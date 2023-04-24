import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/getAllPosts';
import { PostsStrapi } from '../typing/posts';
import HomeTemplate from '../templates/HomeTemplate';

export type HomeProps = {
  posts: PostsStrapi;
};

const Home = ({ posts }: HomeProps) => {
  return <HomeTemplate posts={posts} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
};

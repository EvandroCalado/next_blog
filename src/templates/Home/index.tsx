import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import * as Styled from './styles';
import Head from 'next/head';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import Category from '../../components/Category';

export type HomeProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  category?: string;
  pagination?: PaginationNext;
};

const Home = ({ posts, settings, category, pagination }: HomeProps) => {
  const image = settings.data.attributes.avatar.data.attributes.url;
  const title = settings.data.attributes.title;
  const description = settings.data.attributes.description;
  const footer = settings.data.attributes.footer;

  return (
    <>
      <Head>
        <title>{category ? category : settings.data.attributes.title}</title>
        <meta
          name="description"
          content={settings.data.attributes.description}
        />
      </Head>
      <Header image={image} title={title} description={description} />
      {category && <Category post={posts.data[0]} category={category} />}
      <Container>
        <Styled.Container>
          {posts.data.map((post) => (
            <Card
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.url}
              title={post.attributes.title}
              excerpt={post.attributes.excerpt}
              slug={post.attributes.slug}
            />
          ))}
        </Styled.Container>

        {!pagination?.nextPage ? (
          <Link as={'/post/page/1'} href={'/post/page/[...param]'}>
            Ver todos os posts
          </Link>
        ) : (
          <Pagination {...pagination} />
        )}
      </Container>
      <Footer footer={footer} />
    </>
  );
};

export default Home;

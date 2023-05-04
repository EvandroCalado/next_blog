import * as Styled from './styles';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import { ChevronRight } from '@styled-icons/material-outlined';
import Head from 'next/head';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import Category from '../../components/Category';
import Author from '../../components/Author';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import NotFound from '../../components/NotFound';
import { mapSettings } from '../../data/mapSettings';

export type HomeProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  category?: string;
  author?: string;
  pagination?: PaginationNext;
};

const Home = ({ posts, settings, category, author, pagination }: HomeProps) => {
  const router = useRouter();

  const settingsData = mapSettings(settings);

  return (
    <>
      <Head>
        <title>{category ? category : settings.data.attributes.title}</title>
        <meta
          name="description"
          content={settings.data.attributes.description}
        />
      </Head>
      <Header {...settingsData} />
      {author && <Author post={posts.data[0]} />}
      {category && <Category post={posts.data[0]} category={category} />}
      {posts.data.length <= 0 ? (
        <NotFound>Não encontrado</NotFound>
      ) : (
        <Container>
          <Styled.Container>
            {posts?.data?.map((post) => (
              <Card
                key={post.attributes.slug}
                cover={post.attributes.cover.data.attributes.url}
                title={post.attributes.title}
                date={post.attributes.createdAt}
                slug={post.attributes.slug}
              />
            ))}
          </Styled.Container>

          {router.route === '/search/[title]' ? (
            ''
          ) : !pagination?.nextPage ? (
            <Link
              href={'/post/page/1'}
              style={{ opacity: '1', display: 'inline-block' }}
            >
              <Button icon={<ChevronRight />} color="primary">
                Ver todos
              </Button>
            </Link>
          ) : (
            <Pagination {...pagination} />
          )}
        </Container>
      )}
      <Footer {...settingsData} />
    </>
  );
};

export default Home;

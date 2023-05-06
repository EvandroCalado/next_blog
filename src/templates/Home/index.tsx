import * as Styled from './styles';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Category from '../../components/Category';
import Author from '../../components/Author';
import Button from '../../components/Button';
import NotFound from '../../components/NotFound';

import { ChevronRight } from '@styled-icons/material-outlined';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';

import { mapSettings } from '../../data/mapSettings';
import { mapPosts } from '../../data/mapPosts';

export type HomeProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  category?: string;
  author?: string;
  pagination?: PaginationNext;
};

const Home = ({ posts, settings, category, author, pagination }: HomeProps) => {
  const router = useRouter();

  const postsData = mapPosts(posts);
  const settingsData = mapSettings(settings);

  return (
    <>
      <Head>
        <title>{category ? category : settingsData.title}</title>
        <meta name="description" content={settingsData.description} />
      </Head>
      <Header {...settingsData} />
      {author && <Author {...postsData[0].author} />}
      {category && (
        <Category categories={postsData[0].categories} category={category} />
      )}
      {!postsData ? (
        <NotFound>Não encontrado</NotFound>
      ) : (
        <Container>
          <Styled.Container>
            {postsData?.map((post) => (
              <Card key={post.id} {...post} />
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

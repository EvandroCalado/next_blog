import * as Styled from './styles';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Button from '../../components/Button';
import NotFound from '../../components/NotFound';
import Destak from '../../components/Destak';

import { CallMissedOutgoing } from '@styled-icons/material-outlined';
import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';

import { mapSettings } from '../../data/mapSettings';
import { mapPosts } from '../../data/mapPosts';

export type HomeProps = {
  posts: PostsStrapi;
  post: PostsStrapi;
  settings: SettingsStrapi;
  pagination?: PaginationNext;
};

const Home = ({ posts, post, settings, pagination }: HomeProps) => {
  const router = useRouter();

  const postsData = mapPosts(posts);
  const postDara = mapPosts(post);
  const settingsData = mapSettings(settings);

  return (
    <>
      <Head>
        <title>{settingsData.title}</title>
        <meta name="description" content={settingsData.description} />
      </Head>
      <Header {...settingsData} />
      {!postsData ? (
        <NotFound>Não encontrado</NotFound>
      ) : (
        <Container>
          <Destak {...postDara[0]} />
          <Styled.Container>
            {postsData?.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </Styled.Container>

          {router.route === '/search/[title]' ? (
            ''
          ) : !pagination?.nextPage ? (
            <Link
              href={'/posts?page=1'}
              style={{ opacity: '1', display: 'inline-block' }}
            >
              <Button
                icon={<CallMissedOutgoing />}
                color="primary"
                size="medium"
              >
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

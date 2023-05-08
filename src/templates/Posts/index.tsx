import * as Styled from './styles';

import Head from 'next/head';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Category from '../../components/Category';
import Author from '../../components/Author';
import NotFound from '../../components/NotFound';
import TagTitle from '../../components/TagTitle';

import { PaginationNext, PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';

import { mapSettings } from '../../data/mapSettings';
import { mapPosts } from '../../data/mapPosts';

export type PostsProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
  pagination?: PaginationNext;
  category?: string;
  author?: string;
  tag?: string;
};

const PaginationFake = {
  nextPage: 1,
  previusPage: 1,
  numberOfPosts: 1,
  postsPerPage: 1,
};

const Posts = ({
  posts,
  settings,
  pagination = PaginationFake,
  category,
  author,
  tag,
}: PostsProps) => {
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
      {tag && <TagTitle tag={tag} />}
      {!postsData ? (
        <NotFound>Não encontrado</NotFound>
      ) : (
        <Container>
          <Styled.Container>
            {postsData?.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </Styled.Container>

          {<Pagination {...pagination} />}
        </Container>
      )}
      <Footer {...settingsData} />
    </>
  );
};

export default Posts;

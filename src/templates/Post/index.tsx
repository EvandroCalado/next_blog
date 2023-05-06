import Comments from '../../components/Comments';
import Container from '../../components/Container';
import Content from '../../components/Content';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Details from '../../components/Details';
import Head from 'next/head';
import Tags from '../../components/Tags';
import GoToTop from '../../components/GoToTop';
import Excerpt from '../../components/Excerpt';

import { PostsDataProps } from '../../data/mapPosts';
import { SettingsDataProps } from '../../data/mapSettings';

export type PostProps = PostsDataProps & {
  settings: SettingsDataProps;
};

const PostTemplate = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
  tags,
  slug,
  settings,
}: PostProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <Header {...settings} />
      <Container>
        <Heading>{title}</Heading>
        <Excerpt excerpt={excerpt} />
        <Cover url={cover} alt={title} />
        <Details
          date={createdAt}
          author={author.title}
          categories={categories}
        />
        <Content content={content} />
        <Tags tags={tags} />
        <Comments title={title} slug={slug} />
        <GoToTop />
      </Container>
      <Footer {...settings} />
    </>
  );
};

export default PostTemplate;

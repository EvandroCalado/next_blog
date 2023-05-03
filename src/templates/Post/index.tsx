import Comments from '../../components/Comments';
import Container from '../../components/Container';
import Content from '../../components/Content';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PostDetails from '../../components/Details';
import { PostStrapi } from '../../typing/posts';
import Head from 'next/head';
import Tags from '../../components/Tags';
import GoToTop from '../../components/GoToTop';
import Excerpt from '../../components/Excerpt';

export type PostProps = {
  post: PostStrapi;
  image: string;
  title: string;
  description: string;
  footer: string;
};

const PostTemplate = ({
  post,
  image,
  title,
  description,
  footer,
}: PostProps) => {
  console.log();
  return (
    <>
      <Head>
        <title>{post.attributes.title}</title>
        <meta name="description" content={post.attributes.excerpt} />
      </Head>
      <Header image={image} title={title} description={description} />
      <Container>
        <Heading>{post.attributes.title}</Heading>
        <Excerpt excerpt={post.attributes.excerpt} />
        <Cover
          url={post.attributes.cover.data.attributes.url}
          alt={post.attributes.cover.data.attributes.alternativeText}
        />
        <PostDetails
          date={post.attributes.createdAt}
          author={post.attributes.author.data.attributes.name}
          categories={post.attributes.categories.data}
        />
        <Content content={post.attributes.content} />
        <Tags tags={post.attributes.tags.data} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
        <GoToTop />
      </Container>
      <Footer footer={footer} />
    </>
  );
};

export default PostTemplate;

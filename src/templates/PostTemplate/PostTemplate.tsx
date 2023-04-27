import Comments from '../../components/Comments';
import Container from '../../components/Container';
import Content from '../../components/Content';
import Cover from '../../components/Cover';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PostDetails from '../../components/Details';
import { PostStrapi } from '../../typing/posts';

export type PostTemplateProps = {
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
}: PostTemplateProps) => {
  return (
    <>
      <Header image={image} title={title} description={description} />
      <Container>
        <Heading>{post.attributes.title}</Heading>
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
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </Container>
      <Footer footer={footer} />
    </>
  );
};

export default PostTemplate;

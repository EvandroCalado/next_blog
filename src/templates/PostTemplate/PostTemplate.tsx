import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { PostStrapi } from '../../typing/posts';
// import * as Styled from './PostTemplate.styles';

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
        <h2>{post.attributes.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </Container>
      <Footer footer={footer} />
    </>
  );
};

export default PostTemplate;

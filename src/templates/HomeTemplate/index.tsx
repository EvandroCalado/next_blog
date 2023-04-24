import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import { PostsStrapi } from '../../typing/posts';
import * as Styled from './styles';

export type HomeTemplateProps = {
  posts: PostsStrapi;
};

const HomeTemplate = ({ posts }: HomeTemplateProps) => {
  return (
    <>
      <Header />
      <Container>
        <Styled.Container>
          {posts.data.map((post) => (
            <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
          ))}
        </Styled.Container>
      </Container>
    </>
  );
};

export default HomeTemplate;

import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { PostsStrapi } from '../../typing/posts';
import { SettingsStrapi } from '../../typing/settings';
import * as Styled from './styles';

export type HomeTemplateProps = {
  posts: PostsStrapi;
  settings: SettingsStrapi;
};

const HomeTemplate = ({ posts, settings }: HomeTemplateProps) => {
  const image = settings.data.attributes.avatar.data.attributes.url;
  const title = settings.data.attributes.title;
  const description = settings.data.attributes.description;
  const footer = settings.data.attributes.footer;

  return (
    <>
      <Header image={image} title={title} description={description} />
      <Container>
        <Styled.Container>
          {posts.data.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              title={post.attributes.title}
              excerpt={post.attributes.excerpt}
              slug={post.attributes.slug}
            />
          ))}
        </Styled.Container>
        <Footer footer={footer} />
      </Container>
    </>
  );
};

export default HomeTemplate;

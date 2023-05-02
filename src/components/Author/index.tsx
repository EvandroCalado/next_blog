import { PostStrapi } from '../../typing/posts';
import * as Styled from './styles';

export type AuthorProps = {
  post: PostStrapi;
};

const Author = ({ post }: AuthorProps) => {
  const image =
    post.attributes.author.data.attributes.image.data.attributes.url;
  const alt = post.attributes.author.data.attributes.image.data.attributes.name;
  const title = post.attributes.author.data.attributes.name;
  const resume = post.attributes.author.data.attributes.resume;

  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt={alt} />
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Paragraph>{resume}</Styled.Paragraph>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Author;

import { PostStrapi } from '../../typing/posts';
import * as Styled from './styles';

export type CategoryProps = {
  post: PostStrapi;
  category?: string;
};

const Category = ({ post, category }: CategoryProps) => {
  const filteredCategory = post.attributes.categories.data.filter(
    (post) => post.attributes.name.toLowerCase() === category?.toLowerCase(),
  );

  const image = filteredCategory[0]?.attributes.image.data.attributes.url;
  const alt = filteredCategory[0]?.attributes.image.data.attributes.name;
  const title = filteredCategory[0]?.attributes.name;

  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt={alt} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Category;

import * as Styled from './styles';

export type CategoryProps = {
  image: string;
  title: string;
};

const Category = ({ image, title }: CategoryProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt={title} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Category;

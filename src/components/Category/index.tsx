import * as Styled from './styles';

export type CategoryProps = {
  title: string;
  image: string;
};

export type CategoriesProps = {
  categories: CategoryProps[];
  category?: string;
};

const Category = ({ categories, category }: CategoriesProps) => {
  const filteredCategory = categories?.filter(
    (cat) => cat.title.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <Styled.Wrapper>
      <Styled.Image
        src={filteredCategory?.[0]?.image}
        alt={filteredCategory?.[0]?.title}
      />
      <Styled.Title>{filteredCategory?.[0]?.title}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default Category;

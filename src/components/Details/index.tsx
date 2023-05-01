import Link from 'next/link';
import Date from '../Date';
import * as Styled from './styles';

export type CategoryProps = {
  attributes: {
    name: string;
  };
};

export type DetailsProps = {
  date: string;
  author: string;
  categories: CategoryProps[];
};

const Details = ({ date, author, categories }: DetailsProps) => {
  return (
    <Styled.Wrapper>
      <span>Publicado em</span>
      <p>{<Date date={date} />}</p>
      <span>por</span>
      <Link href={`/post/page/1/ /${author}`}>{author}</Link> <span>em</span>
      {categories.map((category, index) => (
        <Link
          key={`${index}-${category.attributes.name}`}
          href={`/post/page/1/${category.attributes.name}`}
        >
          {category.attributes.name}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Details;

import Link from 'next/link';
import Date from '../Date';
import * as Styled from './styles';

export type CategoryProps = {
  title: string;
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
      <Link href={`/author/${author}?page=1`}>{author}</Link> <span>em</span>
      {categories.map((category, index) => (
        <Link
          key={`${index}-${category.title}`}
          href={`/category/${category.title}?page=1`}
        >
          {category.title}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Details;

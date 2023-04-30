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
      <Link href={'#'}>{author}</Link> <span>em</span>
      {categories.map((category, index) => (
        <Link
          key={`${index}-${category.attributes.name}`}
          as={`/post/page/1/${category.attributes.name.toLowerCase()}`}
          href={'/post/page/[...param'}
        >
          {category.attributes.name}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Details;

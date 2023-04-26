import Link from 'next/link';
import Date from '../Date/Date';
import * as Styled from './PostDetails.styles';

export type CategoryProps = {
  attributes: {
    name: string;
  };
};

export type PostDetailsProps = {
  date: string;
  author: string;
  categories: CategoryProps[];
};

const PostDetails = ({ date, author, categories }: PostDetailsProps) => {
  return (
    <Styled.Wrapper>
      <span>Publicado em</span>
      <p>{<Date date={date} />}</p>
      <span>por</span>
      <Link href={'#'}>{author}</Link> <span>em</span>
      {categories.map((category, index) => (
        <Link key={`${index}-${category.attributes.name}`} href={'#'}>
          {category.attributes.name}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default PostDetails;

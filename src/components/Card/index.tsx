import Link from 'next/link';
import * as Styled from './styles';
import Date from '../Date';

export type CardProps = {
  slug: string;
  title: string;
  cover: string;
  createdAt: string;
};

const Card = ({ slug, title, cover, createdAt }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover>
          <img src={cover} alt={title} />
        </Styled.Cover>
        <Styled.Heading>{title}</Styled.Heading>
        <Styled.Paragraph>
          <Date date={createdAt} />
        </Styled.Paragraph>
      </Link>
    </Styled.Wrapper>
  );
};

export default Card;

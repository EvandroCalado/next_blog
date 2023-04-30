import Link from 'next/link';
import * as Styled from './styles';

export type CardProps = {
  slug: string;
  title: string;
  cover: string;
  excerpt: string;
};

const Card = ({ slug, title, cover, excerpt }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover>
          <img src={cover} alt={title} />
        </Styled.Cover>
        <Styled.Heading>{title}</Styled.Heading>
        <Styled.Paragraph>{excerpt}</Styled.Paragraph>
      </Link>
    </Styled.Wrapper>
  );
};

export default Card;

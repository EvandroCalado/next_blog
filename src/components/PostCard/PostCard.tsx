import Link from 'next/link';
import * as Styled from './PostCard.styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
  excerpt: string;
};

const PostCard = ({ slug, title, cover, excerpt }: PostCardProps) => {
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

export default PostCard;

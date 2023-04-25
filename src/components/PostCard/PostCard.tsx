import Link from 'next/link';
import * as Styled from './PostCard.styles';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Cover>
        <Link href={`/post/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </Styled.Cover>
      <Styled.Heading>
        <Link href={`/post/${slug}`}>{title}</Link>
      </Styled.Heading>
    </Styled.Wrapper>
  );
};

export default PostCard;

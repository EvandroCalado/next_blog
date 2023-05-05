import Link from 'next/link';
import * as Styled from './styles';

export type TagProps = {
  name: string;
};

export type TagsProps = {
  tags: TagProps[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <Styled.Wrapper>
      Tags:
      {tags.map((tag, index) => (
        <Link key={`${index}-${tag.name}`} href={'#'}>
          {tag.name}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Tags;

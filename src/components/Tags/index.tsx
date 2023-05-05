import Link from 'next/link';
import * as Styled from './styles';
import { TagStrapi } from '../../typing/posts';

export type TagsProps = {
  tags: TagStrapi[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <Styled.Wrapper>
      Tags:
      {tags.map((tag, index) => (
        <Link key={`${index}-${tag.attributes.name}`} href={'#'}>
          {tag.attributes.name}
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Tags;

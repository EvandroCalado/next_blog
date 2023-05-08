import Link from 'next/link';
import * as Styled from './styles';
import { ChevronLeft, ChevronRight } from '@styled-icons/material-outlined';
import { PaginationNext } from '../../typing/posts';

export type PaginationProps = PaginationNext;

const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previusPage,
  category,
  author,
  tag,
}: PaginationProps) => {
  const nextLink =
    (category && `/category/${category}?page=${nextPage}`) ||
    (author && `/author/${author}?page=${nextPage}`) ||
    (tag && `/tag/${tag}?page=${nextPage}`) ||
    `/posts?page=${nextPage}`;

  const previusLink =
    (category && `/category/${category}?page=${previusPage}`) ||
    (author && `/author/${author}?page=${previusPage}`) ||
    (tag && `/tag/${tag}?page=${previusPage}`) ||
    `/posts?page=${previusPage}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;

  const hasPreviusPage = previusPage >= 1;

  return (
    <Styled.Wrapper>
      {hasPreviusPage ? (
        <Link href={previusLink || ''}>{<ChevronLeft />}</Link>
      ) : (
        <ChevronLeft style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}

      <p>
        {nextPage - 1} de {Math.ceil(numberOfPosts / postsPerPage)}
      </p>
      {hasNextPage ? (
        <Link href={nextLink || ''}>{<ChevronRight />}</Link>
      ) : (
        <ChevronRight style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}
    </Styled.Wrapper>
  );
};

export default Pagination;

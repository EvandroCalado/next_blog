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
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = author
    ? `/post/page/${nextPage}/${categoryName}/${author}`
    : `/post/page/${nextPage}/${categoryName}`;
  const previusLink = author
    ? `/post/page/${previusPage}/${categoryName}/${author}`
    : `/post/page/${previusPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviusPage = previusPage >= 1;

  return (
    <Styled.Wrapper>
      {hasPreviusPage ? (
        <Link href={previusLink}>{<ChevronLeft />}</Link>
      ) : (
        <ChevronLeft style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}

      <p>
        {nextPage - 1} de {Math.ceil(numberOfPosts / postsPerPage)}
      </p>
      {hasNextPage ? (
        <Link href={nextLink}>{<ChevronRight />}</Link>
      ) : (
        <ChevronRight style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}
    </Styled.Wrapper>
  );
};

export default Pagination;

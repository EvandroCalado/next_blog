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
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previusLink = `/post/page/${previusPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviusPage = previusPage >= 1;

  return (
    <Styled.Wrapper>
      {hasPreviusPage ? (
        <Link as={previusLink} href={'/post/page/[...param]'}>
          {<ChevronLeft />}
        </Link>
      ) : (
        <ChevronLeft style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}

      <p>
        {nextPage - 1} de {Math.round(numberOfPosts / postsPerPage)}
      </p>
      {hasNextPage ? (
        <Link as={nextLink} href={'/post/page/[...param]'}>
          {<ChevronRight />}
        </Link>
      ) : (
        <ChevronRight style={{ opacity: '0.5', cursor: 'not-allowed' }} />
      )}
    </Styled.Wrapper>
  );
};

export default Pagination;

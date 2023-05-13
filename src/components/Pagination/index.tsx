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
  title,
}: PaginationProps) => {
  const nextLink =
    (category && `/category/${category}?page=${nextPage}`) ||
    (author && `/author/${author}?page=${nextPage}`) ||
    (tag && `/tag/${tag}?page=${nextPage}`) ||
    (title && `/search/${title}?page=${nextPage}`) ||
    `/posts?page=${nextPage}`;

  const previusLink =
    (category && `/category/${category}?page=${previusPage}`) ||
    (author && `/author/${author}?page=${previusPage}`) ||
    (tag && `/tag/${tag}?page=${previusPage}`) ||
    (title && `/search/${title}?page=${previusPage}`) ||
    `/posts?page=${previusPage}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;

  const hasPreviusPage = previusPage >= 1;

  return (
    <Styled.Wrapper>
      {hasPreviusPage ? (
        <Link data-testid="link-left" href={previusLink}>
          {<ChevronLeft />}
        </Link>
      ) : (
        <ChevronLeft
          data-testid="link-left"
          style={{ opacity: '0.5', cursor: 'not-allowed' }}
        />
      )}

      <p>
        {nextPage - 1} de {Math.ceil(numberOfPosts / postsPerPage)}
      </p>
      {hasNextPage ? (
        <Link data-testid="link-right" href={nextLink}>
          {<ChevronRight />}
        </Link>
      ) : (
        <ChevronRight
          data-testid="link-right"
          style={{ opacity: '0.5', cursor: 'not-allowed' }}
        />
      )}
    </Styled.Wrapper>
  );
};

export default Pagination;

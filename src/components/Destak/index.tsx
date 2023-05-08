import * as Styled from './styles';
import Button from '../Button';
import Details, { CategoryProps } from '../Details';
import { ReadMore } from '@styled-icons/material-outlined';
import { AuthorDataProps } from '../../data/mapPosts';
import Link from 'next/link';

export type DestakProps = {
  title: string;
  slug: string;
  excerpt: string;
  cover: string;
  createdAt: string;
  author: AuthorDataProps;
  categories: CategoryProps[];
};

const Destak = ({
  title,
  slug,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: DestakProps) => {
  return (
    <>
      <Styled.Title>Em Destaque</Styled.Title>
      <Styled.Wrapper>
        <Styled.Image src={cover} alt={title} />
        <Styled.Container>
          <Details
            author={author.title}
            categories={categories}
            date={createdAt}
          />
          <Styled.SubTitle>{title}</Styled.SubTitle>
          <Styled.Excerpt>{excerpt}</Styled.Excerpt>
          <Link href={`/post/${slug}`}>
            <Button color="primary" icon={<ReadMore />} size="medium">
              Leia mais
            </Button>
          </Link>
        </Styled.Container>
      </Styled.Wrapper>
      <Styled.Line />
    </>
  );
};

export default Destak;

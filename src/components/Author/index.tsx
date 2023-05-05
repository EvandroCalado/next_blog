import * as Styled from './styles';

export type AuthorProps = {
  title: string;
  resume: string;
  image: string;
  alt: string;
};

const Author = ({ title, resume, image, alt }: AuthorProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Image src={image} alt={alt} />
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Paragraph>{resume}</Styled.Paragraph>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Author;

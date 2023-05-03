import * as Styled from './styles';

export type ExcerptProps = {
  excerpt: string;
};

const Excerpt = ({ excerpt }: ExcerptProps) => {
  return <Styled.Paragraph>{excerpt}</Styled.Paragraph>;
};

export default Excerpt;

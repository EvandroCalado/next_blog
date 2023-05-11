import React from 'react';
import * as Styled from './styles';

export type ExcerptProps = {
  excerpt: string;
};

const Excerpt = ({ excerpt }: ExcerptProps) => {
  return (
    <Styled.Paragraph data-testid="excerpt-wrapper">{excerpt}</Styled.Paragraph>
  );
};

export default React.memo(Excerpt);

import * as Styled from './styles';

export type TagTitleProps = {
  tag: string;
};

const TagTitle = ({ tag }: TagTitleProps) => {
  return (
    <Styled.Wrapper data-testid="tag-title-wrapper">
      <Styled.Title data-testid="tag-title">{tag}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default TagTitle;

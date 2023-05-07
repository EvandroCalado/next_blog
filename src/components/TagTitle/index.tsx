import * as Styled from './styles';

export type TagTitleProps = {
  tag: string;
};

const TagTitle = ({ tag }: TagTitleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{tag}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default TagTitle;

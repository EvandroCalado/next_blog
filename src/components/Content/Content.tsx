import * as Styled from './Content.styles';

export type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  return <Styled.Wrapper dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Content;

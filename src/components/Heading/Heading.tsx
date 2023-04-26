import * as Styled from './Heading.styles';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Heading;

import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Heading;

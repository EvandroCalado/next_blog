import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Styled.Wrapper data-testid="heading">{children}</Styled.Wrapper>;
};

export default Heading;

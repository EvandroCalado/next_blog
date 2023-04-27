import * as Styled from './styles';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Container;

import * as Styled from './styles';

export type NotFoundProps = {
  children: React.ReactNode;
};

const NotFound = ({ children }: NotFoundProps) => {
  return (
    <Styled.Wrapper>
      <h2>{children}</h2>
    </Styled.Wrapper>
  );
};

export default NotFound;

import Heading from '../Heading';
import * as Styled from './styles';

export type NotFoundProps = {
  children: React.ReactNode;
};

const NotFound = ({ children = '' }: NotFoundProps) => {
  return (
    <Styled.Wrapper>
      <Heading>{children}</Heading>
    </Styled.Wrapper>
  );
};

export default NotFound;

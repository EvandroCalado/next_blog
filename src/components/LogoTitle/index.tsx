import Content from '../Content';
import Heading from '../Heading';
import * as Styled from './styles';

export type LogoTitleProps = {
  title: string;
  description: string;
};

const LogoTitle = ({ title, description }: LogoTitleProps) => {
  return (
    <Styled.Wrapper>
      <Heading>{title}</Heading>
      <Content content={description} />
    </Styled.Wrapper>
  );
};

export default LogoTitle;

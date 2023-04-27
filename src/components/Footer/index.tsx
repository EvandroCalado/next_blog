import * as Styled from './styles';

export type FooterProps = {
  footer: string;
};

const Footer = ({ footer }: FooterProps) => {
  return <Styled.Wrapper dangerouslySetInnerHTML={{ __html: footer }} />;
};

export default Footer;

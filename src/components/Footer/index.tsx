import Link from 'next/link';
import * as Styled from './styles';
import {
  InstagramSquare,
  GithubSquare,
  Linkedin,
} from '@styled-icons/fa-brands';
import Container from '../Container';

export type SocialLink = {
  title: string;
  link: string;
};

export type FooterProps = {
  footer: string;
  social: SocialLink[];
};

const Footer = ({ footer, social }: FooterProps) => {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.Link
          dangerouslySetInnerHTML={{ __html: footer }}
          data-testid="footer-wrapper"
        />
        <Styled.Container>
          <Link href={social[0].link} target="_blank" data-testid="github">
            <GithubSquare />
          </Link>
          <Link href={social[1].link} target="_blank" data-testid="linkedin">
            <Linkedin />
          </Link>
          <Link href={social[2].link} target="_blank" data-testid="instagram">
            <InstagramSquare />
          </Link>
        </Styled.Container>
      </Styled.Wrapper>
    </Container>
  );
};

export default Footer;

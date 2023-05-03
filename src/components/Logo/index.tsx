import Link from 'next/link';
import * as Styled from './styles';

export type LogoProps = {
  image: string;
  title: string;
  description: string;
};

const Logo = ({ image, title, description }: LogoProps) => {
  return (
    <Styled.Wrapper>
      <Link href={'/'}>
        <Styled.Image src={image} alt={title} />
      </Link>
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Logo;

import Link from 'next/link';
import * as Styled from './styles';

export type LogoProps = {
  image: string;
  title: string;
};

const Logo = ({ image, title }: LogoProps) => {
  return (
    <Styled.Wrapper>
      <Link href={'/'}>
        <Styled.Image src={image} alt={title} />
      </Link>
    </Styled.Wrapper>
  );
};

export default Logo;

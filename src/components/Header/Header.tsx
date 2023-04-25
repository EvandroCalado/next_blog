import Link from 'next/link';
import * as Styled from './Header.styles';

export type HeaderProps = {
  image: string;
  title: string;
};

const Header = ({ image, title }: HeaderProps) => {
  return (
    <Styled.Container>
      <Link href={'/'}>
        <Styled.Image src={image} alt={title} />
        <Styled.Title>Evandro Calado</Styled.Title>
      </Link>
    </Styled.Container>
  );
};

export default Header;

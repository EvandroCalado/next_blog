import Link from 'next/link';
import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Container>
      <Link href={'/'}>Evandro Calado</Link>
    </Styled.Container>
  );
};

export default Header;

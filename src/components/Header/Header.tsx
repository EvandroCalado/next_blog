import Link from 'next/link';
import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.Container>
      <Link href={'/'}>{process.env.SITE_NAME}</Link>
    </Styled.Container>
  );
};

export default Header;

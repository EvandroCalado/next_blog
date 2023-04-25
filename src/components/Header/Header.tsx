import Link from 'next/link';
import * as Styled from './Header.styles';

export type HeaderProps = {
  image: string;
  title: string;
  description: string;
};

const Header = ({ image, title, description }: HeaderProps) => {
  return (
    <Styled.Container>
      <Link href={'/'}>
        <Styled.Image src={image} alt={title} />
      </Link>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
};

export default Header;

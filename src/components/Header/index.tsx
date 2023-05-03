import * as Styled from './styles';
import Search from '../Search';
import Logo from '../Logo';

export type HeaderProps = {
  image: string;
  title: string;
  description: string;
};

const Header = ({ image, title, description }: HeaderProps) => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Logo image={image} title={title} description={description} />
        <Search />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;

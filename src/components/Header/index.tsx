import * as Styled from './styles';
import Search from '../Search';
import Logo from '../Logo';
import ToggleButton from '../ToggleButton';
import LogoTitle from '../LogoTitle';

export type HeaderProps = {
  image: string;
  title: string;
  description: string;
};

const Header = ({ image, title, description }: HeaderProps) => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <LogoTitle title={title} description={description} />
        <Search />
        <ToggleButton />
      </Styled.Wrapper>
      <Logo image={image} title={title} data-logo="Home" />
    </Styled.Header>
  );
};

export default Header;

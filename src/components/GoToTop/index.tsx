import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';

const GoToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Styled.Ancor onClick={handleClick}>
        <KeyboardArrowUp />
      </Styled.Ancor>
    </>
  );
};

export default GoToTop;

import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';
import { useEffect, useState } from 'react';

const GoToTop = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;
    setShow(false);

    window.addEventListener('scroll', function () {
      currentScrollPosition = window.pageYOffset;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <>
      <Styled.Ancor
        onClick={handleClick}
        style={{ display: `${show ? 'inline-block' : 'none'}` }}
      >
        <KeyboardArrowUp />
      </Styled.Ancor>
    </>
  );
};

export default GoToTop;

import styled, { css } from 'styled-components';
import { Button } from '../ToggleButton/styles';
import { Wrapper as Logo } from '../Logo/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};
    
    transition: all 300ms ease-in-out;

    ${Logo} {
      position: absolute;
      left: 50%;
      transform: translate(-50%);

      a {
        opacity: 1;
        transition: all 300ms ease-in-out;
        position: relative;

        
      }

      a:hover {
        filter: brightness(115%);
      }
    }

    ${Button} {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20rem;
    }
  `}
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

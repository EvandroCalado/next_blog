import styled, { css } from 'styled-components';
import { Button } from '../ToggleButton/styles';
import { Wrapper as Logo } from '../Logo/styles';
import { ImputContainer } from '../Search/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.xhuge};
    
    transition: all 300ms ease-in-out;

    ${Logo} {
      position: absolute;
      left: 50%;
      bottom: -20%;
      transform: translate(-50%, 20%);

      a {
        opacity: 1;
        transition: all 300ms ease-in-out;
        position: relative;

        
      }

      a:hover {
        filter: brightness(115%);
      }
    }
  `}
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ${ImputContainer} {
      margin-bottom: 7rem;
    }

    ${Button} {
      position: absolute;
      bottom: 0;
      right: 0;
    }
`;

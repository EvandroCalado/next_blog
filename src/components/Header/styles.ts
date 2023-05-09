import styled, { css } from 'styled-components';
import { Button } from '../ToggleButton/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium} 0;
    margin-bottom: ${theme.spacings.large};
    transition: all 300ms ease-in-out;
  `}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: space-between;

    ${Button} {
      position: absolute;
      right: ${theme.spacings.medium};
      bottom: 0;
    }
  `}
  
`;

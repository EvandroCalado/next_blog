import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  
    svg {
      width: 4rem;
      transition: all 0.2s ease-in-out;
    }
  `}
`;

import styled, { css } from 'styled-components';
import { ButtonProps } from './';

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    border: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    margin: ${theme.spacings.large} 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }

    &:disabled {
      background-color: ${theme.colors.mediumGray};
      color: ${theme.colors.darkGray};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }

    > svg {
      width: 3rem;
      margin-left: 1rem;
    }
  `}
`;

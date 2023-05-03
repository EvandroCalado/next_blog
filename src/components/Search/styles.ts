import styled, { css } from 'styled-components';

export const ImputContainer = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: .5rem;

    svg {
      width: 3rem;
      margin-right: 0.5rem;
    }

  `}
`;

export const Imput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.smallMedium};
    border: none;
    outline: none;
  `}
`;

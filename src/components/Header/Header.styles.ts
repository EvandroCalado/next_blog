import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.large};
    text-align: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.medium};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
  `}
`;

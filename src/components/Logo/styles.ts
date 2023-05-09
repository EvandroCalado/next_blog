import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};

    a {
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.medium};
    }
  `}
`;

export const Container = styled.div`
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.secondary};

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
  `}
`;

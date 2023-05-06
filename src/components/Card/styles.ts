import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    a {
      transition: all 300ms ease-in-out;
    }

    a:hover {
      opacity: 1;
      filter: brightness(170%);
    }
`;

export const Cover = styled.div`
  ${({ theme }) => css`
    img {
      width: 100%;
      display: block;
      aspect-ratio: 16/9;
      border-radius: .5rem;
      margin-bottom: ${theme.spacings.small};

    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.smallMedium};
    color: ${theme.colors.darkGray};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.primary};
  `}
`;

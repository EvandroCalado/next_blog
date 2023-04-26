import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    img {
      max-width: 100%;
    }

    p {
      margin: ${theme.spacings.medium} 0;
    }

    ul,ol {
      margin: ${theme.spacings.medium};
    }

    pre {
      width: 100%;
      overflow-x: auto;
      background-color: ${theme.colors.darkGray};
      color: ${theme.colors.white};
      border-radius: 0.5rem;
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

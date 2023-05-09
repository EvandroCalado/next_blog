import styled, { css } from 'styled-components';

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    margin: ${theme.spacings.large} 0;
    text-align: center;

    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

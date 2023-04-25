import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
  -webkit-box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
  -moz-box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
  border-radius: ${theme.spacings.xsmall};
  overflow: hidden;
  `}
`;

export const Cover = styled.div`
    img {
      width: 100%;
      display: block;
      aspect-ratio: 16/9;
    }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
  padding: 1rem;
  
  a {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.darkGray};
    }
  `}
`;

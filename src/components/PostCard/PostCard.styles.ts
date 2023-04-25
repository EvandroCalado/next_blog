import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
    -webkit-box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
    -moz-box-shadow: 10px 10px 14px -11px rgba(0,0,0,0.34);
    border-radius: ${theme.spacings.xsmall};
    border: 0.1px solid ${theme.colors.lightGray};
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
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 1rem;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.primary};
  `}
`;

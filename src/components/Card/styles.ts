import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    -webkit-box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.34);
    box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.34);
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
    font-size: ${theme.font.sizes.smallMedium};
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

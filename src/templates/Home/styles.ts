import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    grid-template-areas: 
    ;
  `}
`;

export const Category = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.large};
    font-weight: bold;
    text-transform: capitalize;
  `}
`;

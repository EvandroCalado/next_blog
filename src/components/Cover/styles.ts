import styled, { css } from 'styled-components';

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

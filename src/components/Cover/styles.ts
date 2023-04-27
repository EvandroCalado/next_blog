import styled, { css } from 'styled-components';

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

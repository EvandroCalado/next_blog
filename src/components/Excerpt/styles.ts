import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xxlarge} 0;
  `}
`;

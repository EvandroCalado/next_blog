import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
  `}
`;

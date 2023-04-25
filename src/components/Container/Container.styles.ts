import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
  `}
`;

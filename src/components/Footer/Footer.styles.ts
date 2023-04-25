import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    margin-top: ${theme.spacings.large};
    border-top: 2px solid ${theme.colors.lightGray};
    text-align: center;
  `}
`;

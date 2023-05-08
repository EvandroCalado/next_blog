import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium} 0;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: space-between;
  `}
`;

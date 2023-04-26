import styled, { css } from 'styled-components';

export const Date = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-style: italic;
    margin-right: 1rem;
  `}
`;

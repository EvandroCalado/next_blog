import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-weight: 500;
    color: ${theme.colors.mediumGray};
    font-style: italic;
    margin-bottom: ${theme.spacings.large};
    span {
      margin-right: 1rem;
    }

    & a:not(:last-of-type)::after {
      content: ',';
      margin-right: 0.5rem;
    } 

  `}
`;

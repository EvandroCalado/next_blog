import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin: ${theme.spacings.xxlarge} 0;
    color: ${({ theme }) => theme.colors.font};

    a:not(:last-of-type)::after {
      content: ', ';
    }
  `}
`;

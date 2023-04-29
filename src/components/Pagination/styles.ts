import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin: ${theme.spacings.large} 0;

    svg {
      width: 4rem;
      color: ${theme.colors.primary};
    }
  `}
`;

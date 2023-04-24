import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mediumGray};
  `}
`;

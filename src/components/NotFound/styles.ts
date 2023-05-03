import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    width: 100%;
    height: 60rem;
    margin: ${theme.spacings.xlarge} 0;
  `}
`;

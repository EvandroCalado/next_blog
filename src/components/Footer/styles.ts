import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large} 0;
    border-top: 2px solid ${theme.colors.lightGray};
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 5rem;
    margin-left: 1rem;
    color: ${theme.colors.secondary};
  }

  a {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  a:hover {
    filter: brightness(60%);
  }
  `}
  `;

export const Link = styled.div`
    ${({ theme }) => css`
      span {
        color: ${theme.colors.secondary};
        font-weight: 600;
      }
    `}
  `;

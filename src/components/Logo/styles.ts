import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.medium};
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    border-radius: 50%;
    border: 2px solid ${theme.colors.secondary};
  `}
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: ${theme.spacings.large} 0;
`}
`;

export const Image = styled.img`
  width: 4.5rem;
`;

export const Title = styled.h2`
`;

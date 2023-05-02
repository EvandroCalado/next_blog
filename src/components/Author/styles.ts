import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: ${theme.spacings.xxlarge} 0;
`}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    border: 3px solid ${theme.colors.secondary};
    border-radius: 50%;
  `}
`;

export const Container = styled.div`
`;

export const Title = styled.h2`
${({ theme }) => css`
font-size: ${theme.font.sizes.xlarge};
`}
`;

export const Paragraph = styled.p`
`;

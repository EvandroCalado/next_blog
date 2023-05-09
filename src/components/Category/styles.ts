import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: ${theme.spacings.xxlarge} 0;
`}
`;

export const Image = styled.img`
  width: 8rem;
  border-radius: 0.3rem;
`;

export const Title = styled.h2`
${({ theme }) => css`
  font-size: ${theme.font.sizes.xlarge};

  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.large};
  }
`}
`;

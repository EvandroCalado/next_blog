import styled, { css } from 'styled-components';

export const Ancor = styled.a`
  ${({ theme }) => css`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: ${theme.colors.white};
  display: inline-block;
  border: solid .2rem ${theme.colors.secondary};
  border-radius: 50%;
  animation: Up 3s ease-in-out infinite;
  cursor: pointer;
    
  svg {
    width: 5rem;
  }

  @keyframes Up {
    0% {
      transform: translateY(0)
    }
    60% {
      transform: translateY(0)
    }
    70% {
      transform: translateY(-1rem);
    }
    80% {
      transform: translateY(0rem);
    }
    90% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }
  `}
`;

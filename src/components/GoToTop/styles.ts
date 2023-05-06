import styled, { css } from 'styled-components';

export const Ancor = styled.a`
  ${({ theme }) => css`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: ${theme.colors.primary};
  border-radius: 0.5rem;
  -webkit-box-shadow: 7px 10px 14px -2px rgba(23,23,23,0.21);
  -moz-box-shadow: 7px 10px 14px -2px rgba(23,23,23,0.21);
  box-shadow: 7px 10px 14px -2px rgba(23,23,23,0.21);
  transition: all 300ms ease-in-out;
  animation: Up 3s ease-in-out infinite;
  cursor: pointer;

  &:hover {
    opacity: 1;
    filter: brightness(50%);
  }
    
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

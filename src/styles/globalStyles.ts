import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    background-color: ${({ theme }) => theme.colors.background};
  }
  

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
  }

  p {
    font-family: ${({ theme }) => theme.font.family.default};
  }
 
  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .6;
    }
  }
  
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-size: min(1vw, 1vh);
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
    font-family: 'Space Mono', sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.fill};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

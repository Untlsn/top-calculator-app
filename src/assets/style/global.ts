import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  html {
    font-size: min(1vw, 1vh);
    overflow: hidden;
  }
  body {
    overflow: hidden;
    font-family: 'Space Mono', sans-serif;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.fill};
    
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #9E9E9E4D;
    }

    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      border-radius: 15px;

      &:hover {
        background: #cdcdcd;
        border-left: 5px solid #cdcdcd;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

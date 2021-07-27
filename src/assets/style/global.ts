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
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    min-height: 100vh;

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

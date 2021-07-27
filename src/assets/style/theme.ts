export const theme = {
  colors: {
    preSelect: '#26C0AB',
    selected: '#9FE8DF',
    darkBackground: '#00494D',
    text: '#5E7A7D',
    shadowText: '#7F9C9F',
    fill: '#C5E4E7',
    darkening: '#F4FAFA',
    white: '#FFFFFF',
    error: '#D3725B',
  },
};

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
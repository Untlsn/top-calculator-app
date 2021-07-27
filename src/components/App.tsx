import React from 'react';
import { GlobalStyle, theme } from '~/assets/style';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Hello World!</div>
    </ThemeProvider>
  );
};

export default App;
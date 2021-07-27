import React from 'react';
import { GlobalStyle, theme } from '~/assets/style';
import { ThemeProvider } from 'styled-components';
import Main from '~/components/view/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
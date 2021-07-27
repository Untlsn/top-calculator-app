import React from 'react';
import { GlobalStyle, theme } from '~/assets/style';
import { ThemeProvider } from 'styled-components';
import Main from '~/components/view/Main';
import StoreProvider from '~/providers/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
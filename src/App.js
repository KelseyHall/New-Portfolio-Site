import { ThemeProvider } from '@emotion/react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

import RouterSwitch from './Router/Router';
import theme from './StyleSheet/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <RouterSwitch />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

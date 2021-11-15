import { ThemeProvider } from '@emotion/react';
import { Container, Typography } from '@mui/material';
// import { AboutMeSection, HomeBannerImg } from './Pages/Home';
import RouterSwitch from './Router/Router';
import theme from './StyleSheet/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Container>
            <Typography variant="h2">Kelsey Hall's</Typography>
          </Container>
        </header>
        <RouterSwitch />
      </div>
    </ThemeProvider>
  );
}

export default App;

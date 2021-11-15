import { Container, Typography } from '@mui/material';
import { AboutMeSection, HomeBannerImg } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Typography variant="h2">Kelsey Hall's</Typography>
        </Container>
      </header>
      <HomeBannerImg />
      <AboutMeSection />
    </div>
  );
}

export default App;

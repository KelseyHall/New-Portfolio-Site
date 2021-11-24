import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C8CDC1',
      light: '#F7F6F6',
      dark: '#979386',
      contrastText: '#463301',
    },
    secondary: {
      main: '#592015',
      light: '#EBECEA',
      dark: '#55514A',
      contrastText: '#F6F6F6',
    },
  },
});

export default theme;

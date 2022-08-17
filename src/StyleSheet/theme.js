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
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
          font-family: 'ArialHBS';
          src: url('./fonts/ArialHB.ttc') format('TrueType');
        }
        `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'none',
          padding: '3% 0',
          boxShadow: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: ['ArialHBS'],
    body1: {
      fontSize: '1.2rem',
    },
  },
});

export default theme;

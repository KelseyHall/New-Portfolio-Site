import React from 'react';
import ReactDOM from 'react-dom';
import './StyleSheet/style.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

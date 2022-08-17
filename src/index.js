import React from 'react';
import ReactDOM from 'react-dom';
import './StyleSheet/style.css';
import App from './App';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />

    <div className="max-width">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

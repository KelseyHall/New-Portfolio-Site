import {
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <AppBar position="static" className="App-header">
        <Toolbar>
          <Typography variant="h2" className="Logo">
            Kelsey Hall's
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <ul className="NavFont">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/projects">projects</NavLink>
            </li>
            <li>
              <NavLink to="/contactme">contact me</NavLink>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;

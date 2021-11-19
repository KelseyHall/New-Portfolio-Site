import {
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  return (
    <List className="NavFont">
      <ListItem className="Nav-item">
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem className="Nav-item">
        <NavLink to="/gallery">Gallery</NavLink>
      </ListItem>
      <ListItem className="Nav-item">
        <NavLink to="/projects">Projects</NavLink>
      </ListItem>
      <ListItem className="Nav-item">
        <NavLink to="/contactme">Contact me</NavLink>
      </ListItem>
    </List>
  );
};

const Header = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const DisplayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
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
          onClick={handleDrawerOpen}
        >
          <Menu />
        </IconButton>
        <Drawer
          sx={{
            width: '40vw',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '40vw',
              boxSizing: 'border-box',
            },
          }}
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div>
            <NavList />
          </div>
        </Drawer>
      </Toolbar>
    );
  };

  const DisplayDesktop = () => {
    return (
      <Toolbar>
        <Typography variant="h2" className="Logo">
          Kelsey Hall's
        </Typography>

        <ul className="NavFont Nav-List">
          <li className="Nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="Nav-item">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="Nav-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="Nav-item">
            <NavLink to="/contactme">Contact me</NavLink>
          </li>
        </ul>
      </Toolbar>
    );
  };

  return (
    <Container>
      <AppBar position="static" className="App-header">
        {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      </AppBar>
    </Container>
  );
};

export default Header;

import {
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../StyleSheet/theme';
import { NavList, DisplayDesktop } from './Header-Navs';

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
        <NavLink to="/" className="Logo">
          <Typography variant="h2" className="Logo">
            Kelsey Hall's
          </Typography>
        </NavLink>
        <IconButton
          size="large"
          edge="end"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={handleDrawerOpen}
        >
          <Menu style={{ fontSize: 35 }} />
        </IconButton>
        <Drawer
          sx={{
            width: { xs: '100vw', sm: '40vw' },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: { xs: '100vw', sm: '40vw' },
              backgroundColor: `${theme.palette.primary.main}`,
              boxSizing: 'border-box',
            },
          }}
          variant="temporary"
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="close"
              sx={{ mr: 3, paddingLeft: '30px' }}
              onClick={handleDrawerClose}
            >
              <Close style={{ fontSize: 35 }} />
            </IconButton>
            <div onClick={handleDrawerClose}>
              <NavList />
            </div>
          </div>
        </Drawer>
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

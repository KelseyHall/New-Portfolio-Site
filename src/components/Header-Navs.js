import { Toolbar, Typography, List, ListItem } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavList = () => {
  return (
    <List className="NavFont">
      <ListItem className="Nav-item">
        <NavLink to="/">Home</NavLink>
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

export const DisplayDesktop = () => {
  return (
    <Toolbar>
      <NavLink to="/" className="Logo">
        <Typography
          variant="h2"
          className="Logo"
          style={{ fontFamily: 'Amita' }}
        >
          Kelsey Hall's
        </Typography>
      </NavLink>

      <ul className="NavFont Nav-List">
        <li className="Nav-item">
          <NavLink to="/">Home</NavLink>
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

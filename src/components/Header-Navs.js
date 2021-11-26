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

export const DisplayDesktop = () => {
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

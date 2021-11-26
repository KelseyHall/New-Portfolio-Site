import { Toolbar, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import githubIcon from '../img/github-icon.png';
import linkedInIcon from '../img/linkedIn-icon.png';
import theme from '../StyleSheet/theme';

const Footer = () => {
  return (
    <Box
      className="footer"
      maxWidth="sm"
      style={{
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'background-color': `${theme.palette.primary.dark}`,
      }}
    >
      <Toolbar>
        <Link
          variant="body2"
          color="inherit"
          href="https://github.com/KelseyHall"
          underline="none"
          className="align-content-center"
        >
          <img src={githubIcon} className="footer-icons" alt="github" />
          @KelseyHall
        </Link>
        <Link
          variant="body2"
          color="inherit"
          href="https://www.linkedin.com/in/kelsey-hall23/"
          underline="none"
          className="align-content-center"
        >
          <img src={linkedInIcon} className="footer-icons" alt="github" />
          @Kelsey-Hall23
        </Link>
      </Toolbar>
      <Link
        variant="body2"
        color="inherit"
        href="#"
        underline="none"
        className="footer-copyright"
      >
        Copyright 2021
      </Link>
    </Box>
  );
};

export default Footer;

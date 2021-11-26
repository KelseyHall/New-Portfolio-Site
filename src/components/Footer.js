import { Toolbar, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import githubIcon from '../img/github-icon.png';
import linkedInIcon from '../img/linkedIn-icon.png';

const Footer = () => {
  return (
    <Box
      className="footer"
      maxWidth="sm"
      style={{
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
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
// <div className="footer" color="primary">
//       <a href="www.google.com">@KelseyHall</a>
//       <a href="www.google.com">@Kelsey-Hall23</a>
//       <a href="www.google.com">Copyright 2021</a>
//     </div>

import { Link, Container } from '@mui/material';
// import { Box } from '@mui/system';
import React from 'react';
// import githubIcon from '../img/github-icon.png';
// import linkedInIcon from '../img/linkedIn-icon.png';
// import theme from '../StyleSheet/theme';

const Footer = () => {
  return (
    <Container
      className="footer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // 'background-color': `${theme.palette.primary.dark}`,
      }}
    >
      {/*<Toolbar>
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
      </Toolbar>*/}
      <Link
        variant="body2"
        color="inherit"
        href="#"
        underline="none"
        className="footer-copyright"
      >
        © 2022 Kelsey Hall
      </Link>
    </Container>
  );
};

export default Footer;

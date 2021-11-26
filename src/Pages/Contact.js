import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import BannerImg from '../img/IMG_1550.jpeg';

import githubIcon from '../img/github-icon.png';
import linkedInIcon from '../img/linkedIn-icon.png';

import { Box } from '@mui/system';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="page-title"
      >
        Contact Me
      </Typography>
      <img
        src={BannerImg}
        className="ContactUs-BannerImg"
        alt="Kelsey standing in a tea plantation landscape"
      />
      <Box
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
        className="contact-socials"
      >
        <Typography variant="h4" color="secondary" className="secondary-title">
          Other places to find me:
        </Typography>
        <Link
          variant="body2"
          color="inherit"
          href="https://github.com/KelseyHall"
          underline="none"
          className="align-content-center"
        >
          <img src={githubIcon} className="contact-social-icons" alt="github" />
          @KelseyHall
        </Link>
        <Link
          variant="body2"
          color="inherit"
          href="https://www.linkedin.com/in/kelsey-hall23/"
          underline="none"
          className="align-content-center"
        >
          <img
            src={linkedInIcon}
            className="contact-social-icons"
            alt="github"
          />
          @Kelsey-Hall23
        </Link>
      </Box>
      <Typography variant="h4" color="secondary" className="secondary-title">
        Let's Chat
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;

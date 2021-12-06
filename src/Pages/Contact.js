import React from 'react';
import { Container, Typography, Link, Button } from '@mui/material';
import BannerImg from '../img/IMG_1550.jpeg';

import githubIcon from '../img/github-icon.png';
import linkedInIcon from '../img/linkedIn-icon.png';

import { Box } from '@mui/system';
import { MailOutline } from '@mui/icons-material';
// import ContactForm from '../components/ContactForm';

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
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
        className="contact-socials"
      >
        <Typography variant="h4" color="secondary" className="secondary-title">
          Other places to find me:
        </Typography>
        <Link
          variant="body1"
          color="inherit"
          href="https://github.com/KelseyHall"
          underline="none"
          className="align-content-center"
          sx={{ padding: { xs: '0 5px', md: '0 25px' } }}
        >
          <img src={githubIcon} className="contact-social-icons" alt="github" />
          @KelseyHall
        </Link>
        <Link
          variant="body1"
          color="inherit"
          href="https://www.linkedin.com/in/kelsey-hall23/"
          underline="none"
          className="align-content-center"
          sx={{ padding: { xs: '0 10px', sm: '0 20px' } }}
        >
          <img
            src={linkedInIcon}
            className="contact-social-icons"
            alt="github"
          />
          @Kelsey-Hall23
        </Link>
      </Box>
      <Box>
        <Typography variant="h4" color="secondary" className="secondary-title">
          Let's Chat
        </Typography>

        <Button
          href="mailto:hallkelsey23@gmail.com"
          variant="contained"
          color="secondary"
          sx={{ fontSize: '14px' }}
        >
          Email Me <MailOutline sx={{ padding: '0 5px' }} fontSize="medium" />
        </Button>
      </Box>

      {/*<ContactForm />*/}
    </Container>
  );
};

export default ContactPage;

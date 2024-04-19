import React from 'react';
import { Container, Typography } from '@mui/material';
import LandscapeImg from '../img/017165F5-1BDF-4B8F-BB08-E7B1B790B57A.jpeg';
import KelseySelfie from '../img/IMG_3475.jpeg';
import { Box } from '@mui/system';

export const HomeBannerImg = () => {
  return (
    <div>
      <img
        alt="beautiful landscape of tea plantation in malaysia"
        src={LandscapeImg}
        style={{
          width: '100vw',
          maxWidth: '1920px',
          marginBottom: '5%',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    </div>
  );
};

export const AboutMeSection = () => {
  return (
    <Container className="About-Me-Container">
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="page-title"
      >
        About Me
      </Typography>
      <img
        src={KelseySelfie}
        alt="Kelsey's Selfie in the woods"
        className="About-Me-Selfie float-left"
      />
      <Typography variant="body1" color="primary.contrastText">
        <span className="bold-text-question">Hi!</span>
        <span className="bold-text-question">
          What position am I looking for:
        </span>{' '}
        Frontend Web Developer.
        <span className="bold-text-question">
          {' '}
          What technologies am I comfortable with:
        </span>{' '}
        React.js, JavaScript, TypeScript, Next.js, HTML, CSS, jQuery, Material
        UI, Tailwind and Contentful.{' '}
        <span className="bold-text-question">
          Currently learning:
        </span> Node.js{' '}
        <span className="bold-text-question">What am I up to: </span>Working for
        Jonas Software in the Clubhouse Online Branch. Working as a Web Designer
        / Frontend Developer creating websites within the Kentico framework.
      </Typography>

      <Typography variant="body1" color="primary.contrastText">
        <span className="bold-text-question">Design skills:</span> creating
        responsive designs across many platforms.{' '}
        <span className="bold-text-question">Design software:</span> Photoshop,
        Figma, and Illustrator.
      </Typography>
      {/*
      <Typography variant="body1" color="primary.contrastText">
        <span className="bold-text-question">Education:</span>Multimedia Design
        at Durham College in 2011-2013. I am continually taking courses to stay
        up to date with the industry.
      </Typography>
      <Typography variant="body1" color="primary.contrastText">
        <span className="bold-text-question">
          {' '}
          Ok, now a little more personal.
        </span>
        I enjoy photography, playing with my dog Zoey, motorcycle rides and
        traveling. I believe strongly in a healthy work/life balance and look
        forward to working along a company with similar views.
      </Typography>
       */}
    </Container>
  );
};

const HomePage = () => {
  return (
    <Box>
      <HomeBannerImg />
      <AboutMeSection />
    </Box>
  );
};

export default HomePage;

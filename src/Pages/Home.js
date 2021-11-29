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
        style={{ width: '100vw', 'margin-bottom': '5%' }}
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
        {`Let’s start with a little about me. 11 years ago I took Multimedia Design at Durham college. This gave me a wide look at all aspects of media. I enhanced my passion for photography, photo manipulation  and created a love for website creation. I have used my design skills to create business cards, gift certificates, electronic newsletters and more. Life has a way of taking you through twist and turns. Both stepping away from the field, only to start a new job that leads to them needing help getting their business on the map. I took a break from learning the newest coding and design software to explore the world. Covid-19 created an opportunity for me to reflect and realize I wanted to do put my time and effort learning all the new tricks of the trade. I look forward to expanding my knowledge and working with a company to grow. 
        Check out my projects page to more details on what languages and softwares I use.   `}
      </Typography>
    </Container>
  );
};

const HomePage = () => {
  return (
    <Box sx={{ position: '', top: '0' }}>
      <HomeBannerImg />
      <AboutMeSection />
    </Box>
  );
};

export default HomePage;

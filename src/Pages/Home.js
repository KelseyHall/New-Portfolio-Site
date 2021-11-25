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
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim at amet, parturient orci. Nibh urna commodo tortor dui eget erat commodo sit. Porttitor sed eget quis tortor sit. Sit bibendum euismod arcu est facilisis ac sit mattis varius. Amet, pellentesque tincidunt leo proin amet, integer sollicitudin nisl. Fusce est non nec quis urna ultrices vulputate. Maecenas eget turpis phasellus in orci, ultricies. Diam tortor, ornare sit sem nunc, lacus blandit. Turpis volutpat, malesuada cursus in vel enim, risus. Sit tortor arcu vitae semper leo sed. `}
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

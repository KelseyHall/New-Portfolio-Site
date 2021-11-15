import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
} from '@mui/material';
import tempImg from '../img/IMG_3475.jpeg';
const designProjects = [
  {
    design: [
      {
        title: 'DesignProject1',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject2',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject3',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject4',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject5',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject6',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'DesignProject7',
        description: 'about this project',
        img: tempImg,
      },
    ],
    coding: [
      {
        title: 'CodingProject1',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject2',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject3',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject4',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject5',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject6',
        description: 'about this project',
        img: tempImg,
      },
      {
        title: 'CodingProject7',
        description: 'about this project',
        img: tempImg,
      },
    ],
  },
];
const DisplayProjects = (item) => (
  <Grid key={item.title} item xs={12} sm={6} md={4}>
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={item.img} alt="Temp" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

const ProjectsPage = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="page-title"
      >
        Projects
      </Typography>
      {designProjects.map(({ design, coding }) => (
        <Grid container spacing={2}>
          <Typography
            variant="h3"
            color="primary.contrastText"
            className="page-title"
          >
            Coding
          </Typography>
          {coding.map((item) => DisplayProjects(item))}

          <Typography
            variant="h3"
            color="primary.contrastText"
            className="page-title"
          >
            Design
          </Typography>
          {design.map((item) => DisplayProjects(item))}
        </Grid>
      ))}
    </Container>
  );
};

export default ProjectsPage;

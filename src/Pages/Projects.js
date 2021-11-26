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

import projects from '../components/projectsDatabase';

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
  return projects.map(({ design, coding }) => (
    <Container>
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="page-title"
      >
        Projects
      </Typography>

      <Typography
        variant="h3"
        color="primary.contrastText"
        className="section-title coding-title"
      >
        {`<Coding />`}
      </Typography>
      <Grid container spacing={2}>
        {coding.map((item) => DisplayProjects(item))}
      </Grid>
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="section-title design-title"
      >
        Design
      </Typography>
      <Grid container spacing={2}>
        {design.map((item) => DisplayProjects(item))}
      </Grid>
    </Container>
  ));
};

export default ProjectsPage;

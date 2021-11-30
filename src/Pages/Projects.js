import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Button,
  Box,
  Modal,
} from '@mui/material';
import theme from '../StyleSheet/theme';

import projects from '../components/projectsDatabase';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  'max-height': '80%',
  bgcolor: `${theme.palette.secondary.light}`,
  border: `2px solid ${theme.palette.secondary.main}`,
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};
const DisplayProjects = ({ title, description, img, content }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid key={title} item xs={12} sm={6} md={6}>
      <Card>
        <CardMedia component="img" height="140" image={img} alt="Temp" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Button onClick={handleOpen}>See Project</Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Button
                sx={{ color: theme.palette.secondary.main }}
                onClick={handleClose}
              >
                close
              </Button>
              {content.map(({ title, imgs, src }) => (
                <Box className="project-contents">
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  {imgs.map((item) => (
                    <img src={item} width="100%" alt={title} />
                  ))}
                  {src ? <Button>view live</Button> : null}
                </Box>
              ))}
            </Box>
          </Modal>
        </CardContent>
      </Card>
    </Grid>
  );
};

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
      <Typography variant="body1">{`info about coding`}</Typography>
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
      <Typography variant="body1">{`info about design`}</Typography>
      <Grid container spacing={2}>
        {design.map((item) => DisplayProjects(item))}
      </Grid>
    </Container>
  ));
};

export default ProjectsPage;

// const [show, setShow] = React.useState(false);
// const container = React.useRef(null);

// const handleClick = () => {
//   setShow(!show);
// };

// <Button onClick={handleClick}>
// {show ? 'Hide Project' : 'See Project'}
// </Button>

// {show ? (
// <Portal container={container.current}>
//   {content.map(({ title, imgs, src }) => (
//     <Box className="project-contents">
//       <Typography gutterBottom variant="h5" component="div">
//         {title}
//       </Typography>
//       {imgs.map((item) => (
//         <img src={item} width="20%" />
//       ))}
//       {src ? <Button>view live</Button> : ''}
//     </Box>
//   ))}
// </Portal>
// ) : null}
// <Box ref={container} sx={{ width: '100vw' }} />

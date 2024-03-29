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
  CardActionArea,
} from '@mui/material';
import theme from '../StyleSheet/theme';
import projects from '../components/projectsDatabase';
import { v4 as uuidv4 } from 'uuid';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '90%',
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
    <Grid key={uuidv4()} item xs={12} sm={6} md={4}>
      <Card sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={img} alt="Temp" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={theme.palette.primary.contrastText}
            >
              {title}
            </Typography>
            <Typography variant="body2" color={theme.palette.secondary.dark}>
              {description}
            </Typography>

            <Button
              sx={{
                color: theme.palette.secondary.main,
                display: 'flex',
                margin: '0 auto',
                fontWeight: 'bold',
              }}
            >
              See Project
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <Button
            sx={{
              color: theme.palette.secondary.main,
              '&:hover': { textDecoration: 'underline' },
            }}
            onClick={handleClose}
          >
            close
          </Button>
          {content.map(({ title, imgs, src, github }) => (
            <Box key={uuidv4()} className="project-contents">
              <Typography
                gutterBottom
                variant="h5"
                className="project-subtitle"
                component="div"
                color={theme.palette.secondary.dark}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                {imgs.map((item) => (
                  <img
                    key={uuidv4()}
                    src={item}
                    className="project-sub-img"
                    alt={title}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                {src ? (
                  <Button
                    sx={{
                      color: theme.palette.secondary.main,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                    target="_blank"
                    className="project-buttons"
                    href={src}
                  >
                    view live
                  </Button>
                ) : null}
                {github ? (
                  github[0].name ? (
                    //has multiple repositories
                    <div style={{ display: 'flex' }}>
                      <Typography variant="h6" color="secondary.main">
                        Git Repository:
                      </Typography>
                      {github.map((each) => (
                        <Button
                          sx={{
                            color: theme.palette.secondary.main,
                            '&:hover': { textDecoration: 'underline' },
                          }}
                          target="_blank"
                          className="project-buttons"
                          href={each.code}
                        >
                          {each.name}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    //only one repository
                    <Button
                      sx={{
                        color: theme.palette.secondary.main,
                        '&:hover': { textDecoration: 'underline' },
                      }}
                      target="_blank"
                      className="project-buttons"
                      href={github}
                    >
                      git repository
                    </Button>
                  )
                ) : null}
              </Box>
            </Box>
          ))}
        </Box>
      </Modal>
    </Grid>
  );
};

const ProjectsPage = () => {
  return projects.map(({ design, coding }) => (
    <Container key={uuidv4()}>
      <Typography
        variant="h3"
        color={theme.palette.primary.contrastText}
        className="page-title"
      >
        Projects
      </Typography>

      <Typography
        variant="h4"
        color={theme.palette.primary.contrastText}
        className="section-title coding-title"
      >
        {`<Coding />`}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', marginBottom: '1rem' }}
      >{`Knowledge in JavaScript, TypeScript, React.js, Next.js, CSS, Sass, HTML, Material UI, Tailwind`}</Typography>
      <Grid container spacing={2}>
        {coding.map((item) => DisplayProjects(item))}
      </Grid>
      <Typography
        variant="h4"
        color={theme.palette.primary.contrastText}
        className="section-title design-title"
        style={{ fontFamily: 'Rancho' }}
      >
        Design
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', marginBottom: '1rem' }}
      >{`Knowledge in Photoshop, Illustrator, Figma`}</Typography>
      <Grid container spacing={2}>
        {design.map((item) => DisplayProjects(item))}
      </Grid>
    </Container>
  ));
};

export default ProjectsPage;

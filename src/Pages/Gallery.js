import React from 'react';
import { Container, Typography } from '@mui/material';

import { SRLWrapper } from 'simple-react-lightbox';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import theme from '../StyleSheet/theme';
import { galleryDataBase } from '../components/galleryDataBase';

//structure of quilted image list
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

//adjustments to lightbox
const options = {
  settings: { overlayColor: `${theme.palette.secondary.dark}` },
  buttons: {
    showThumbnailsButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showAutoplayButton: false,
  },
  caption: {
    captionColor: `${theme.palette.secondary.contrastText}`,
  },
};

const GalleryPage = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        color="primary.contrastText"
        className="page-title"
      >
        Gallery
      </Typography>
      <SRLWrapper options={options}>
        <ImageList
          sx={{ width: '80%', height: '100%' }}
          variant="quilted"
          cols={4}
          rowHeight={'100%'}
          className=" auto-margin dense-gallery "
        >
          {galleryDataBase.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </SRLWrapper>
    </Container>
  );
};

export default GalleryPage;

import React from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';

import { SRLWrapper } from 'simple-react-lightbox';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import theme from '../StyleSheet/theme';
import { galleryDataBase } from '../components/galleryDataBase';

import { v4 as uuidv4 } from 'uuid';

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
  const matches = useMediaQuery('(max-width:768px)');
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
          cols={matches ? 2 : 4}
          rowHeight={'auto'}
          className=" auto-margin dense-gallery "
        >
          {galleryDataBase.map((item) => (
            <ImageListItem
              key={uuidv4()}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, item.altText, 121, item.rows, item.cols)}
                alt={item.altText}
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

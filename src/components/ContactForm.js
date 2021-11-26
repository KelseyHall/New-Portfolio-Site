import React from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
      autoComplete="off"
    >
      <TextField
        required
        fullWidth
        id="filled-basic"
        label="Name"
        color="secondary"
        variant="filled"
      />
      <TextField
        required
        fullWidth
        id="filled-basic"
        label="Email"
        color="secondary"
        variant="filled"
      />
      <TextField
        required
        fullWidth
        id="filled-basic"
        label="Subject"
        color="secondary"
        variant="filled"
      />
      <TextField
        required
        id="filled-textarea"
        label="Message"
        multiline
        fullWidth
        variant="filled"
        color="secondary"
        rows={4}
      />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;

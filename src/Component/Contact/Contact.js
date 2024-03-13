import React from 'react';
import './Contact.css';
import { filmStore } from '../Films/ListOfFilms';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { mb: 2, width: '50ch' },

      }}
      noValidate
      autoComplete="off">
      <h1 className='h1-contact'>Contact Us</h1>
      {/* <Grid container spacing={2} className='contact-container'>  THIS IS FROM PREVIOUS VERSION*/}
      <Grid container className='contact-container'>
        {/* Hover Image */}
        <Grid item xs={5}>
          <div className='gallery'>
            <img
              src="https://cdn.dribbble.com/userupload/12756906/file/original-3950613f21975cd9cd529abda0c2124f.jpg?resize=1504x1270"
              alt="Concept Art"
            />
          </div>
        </Grid>
        {/* Contact Text Field */}
        <Grid item xs={5} className='contact-form'>
          <div className='contact-form_transBG'>
            <TextField id="filled-basic" label="Full Name" variant="filled" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px' }} />
            <TextField id="filled-basic" label="Email Address" variant="filled" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px' }} />

            <Autocomplete
              id="film-select"
              options={filmStore}
              autoHighlight
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <MenuItem {...props} key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Film You'd Like to Discuss" variant="filled" 
                sx={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px' }} />
              )}
            />

            <TextField
              id="filled-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="filled"
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px' }}
            />
            <div>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

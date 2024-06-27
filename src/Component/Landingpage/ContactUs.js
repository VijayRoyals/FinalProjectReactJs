import React from 'react';
import { Container, Typography, Paper, Box, Grid, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <Container>
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          

          <Typography variant="h5" gutterBottom mt={4}>
            Get in Touch
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="message"
                  label="Your Message"
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography variant="h6" gutterBottom mt={4}>
            Contact Information
          </Typography>
          <Typography variant="body1">
            Tel: 08572 - 246298, 246299<br/>
            Tel: 9391848685<br/>
            Email: @mit..org, principal@mit.org
          </Typography>
          <Typography variant="body1" mt={2}>
          Massachusetts Institute of Technology<br/>
          77 Massachusetts Avenue, Cambridge, MA, USA,<br/>
          VisitMap EventsPeople CareersContact PrivacyAccessibility
          Social Media Hub 
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactUs;

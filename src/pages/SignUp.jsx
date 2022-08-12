import { Button, Container, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const theme = useTheme();
    const lowerThanMid = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: lowerThanMid ? '92%' : '66%', marginTop: '3rem'}}>
            <AccountBoxIcon sx={{ fontSize: 40}}/>
            <Typography component="h1" variant="h5" sx={{marginBottom: '1rem'}}>
                Sign up
            </Typography>
            <Grid container spacing={2} sx={{marginTop: '1rem'}}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
        </Container>
    )
}

export default SignUp
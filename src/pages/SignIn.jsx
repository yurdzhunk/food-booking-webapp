import { Button, Container, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const theme = useTheme();
    const lowerThanMid = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: lowerThanMid ? '92%' : '48%', marginTop: '3rem'}}>
            <VpnKeyIcon sx={{ fontSize: 40}}/>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Grid container spacing={2} sx={{marginTop: '1rem'}}>
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
                Sign In
            </Button>
        </Container>
    )
}

export default SignIn
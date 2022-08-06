import { AppBar, Divider, Grid, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate } from 'react-router-dom';
import { GridCenter, MyLogInButton, MyNavBarItem, MySignUpButton, TypographyLabel } from '../myCustomUI/CustomComponents';
import BurgerMenu from '../myCustomUI/BurgerMenu';

const NavBar = () => {

    const [currency, setCurrency] = useState('EUR');
    const navigate = useNavigate();

    const theme = useTheme();
    const lowerThanMid = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position='static'>
            <Toolbar>
                {
                    lowerThanMid
                    ?   <Grid container spacing={1}>
                            <Grid item xs={6} md={6} sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <FastfoodIcon  sx={{ marginTop: '2px'}} onClick={() => navigate('/')}/>
                                <TypographyLabel variant='h6' color='#fff' onClick={() => navigate('/')}>
                                    FoodBooking
                                </TypographyLabel>
                            </Grid>
                            <Grid item xs={6} md={6} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                                <BurgerMenu />
                            </Grid>
                        </Grid>
                    :   <Grid container spacing={1}>
                            <Grid item xs={6} md={8} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Grid item xs={6} sm={6} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
                                    <FastfoodIcon  sx={{ marginTop: '2px'}} onClick={() => navigate('/')}/>
                                    <TypographyLabel variant='h6' color='#fff' onClick={() => navigate('/')}>
                                        FoodBooking
                                    </TypographyLabel>
                                </Grid>
                                <Grid item xs={6} sm={6} md={8} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
                                        <Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={3} sx={{marginRight: '10px'}}>
                                            <MyNavBarItem onClick={() => navigate('Cart')} >
                                                <LocalGroceryStoreIcon />
                                                Cart
                                            </MyNavBarItem>
                                            <MyNavBarItem onClick={() => navigate('Restaurants')}>
                                                <ExploreIcon />
                                                Restaurants
                                            </MyNavBarItem>
                                        </Stack>
                                    <Divider orientation='vertical' flexItem={true}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
                                <GridCenter item xs={6} md={6}>
                                    <MyLogInButton variant='contained'>
                                        Log In
                                    </MyLogInButton>
                                </GridCenter>
                                <GridCenter item xs={6} md={6}>
                                    <MySignUpButton variant='contained'>
                                        Sign Up
                                    </MySignUpButton>
                                </GridCenter>
                            </Grid>
                        </Grid>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { StoreLabelBox } from '../myCustomUI/CustomComponents';
import { storesImages } from '../assets/stores_images/storesImage';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const stores = ['Dominos', 'KFC', 'Mcdonalds']
    const navigate = useNavigate();

    return (
        <Container sx={{marginTop: '3rem'}}>
            <Typography variant='h3' sx={{textAlign: 'center'}}>ORDER NOW!</Typography>
                <Grid container spacing={1} sx={{marginTop: 3}}>
                    {
                        stores.map((item) => {
                            return (
                                    <Grid item xs={12} sm={6} md={4} key={item}>
                                        <StoreLabelBox sx={{backgroundImage: "url(" + storesImages[item] + ")"}} onClick={() => navigate('/Products', {state: {store: item}})}>
                                            <Box sx={{backgroundColor: 'rgba(0, 0, 0, .4)', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <Typography sx={{color: '#fff'}}>{item}</Typography>
                                            </Box>
                                        </StoreLabelBox>
                                    </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
    )
}

export default Main
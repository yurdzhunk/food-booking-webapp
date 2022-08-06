import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteProduct, minusCount, plusCount } from '../redux/cartProducts';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {

    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.cartProducts.list);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    const theme = useTheme();
    const lowerThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        let tempTotal = 0;
        for(let item of productsInCart){
            tempTotal = tempTotal +  parseInt(item.count) * parseInt(item.price)
        }
        setTotal(tempTotal);
    }, [productsInCart]);

    const deleteProductFromCart = (id) => {
            dispatch(deleteProduct(id));
    }

    return (
        <Box>
            {
                (productsInCart.length > 0)
                ?<Container sx={{marginTop: '3rem', marginBottom: '1rem'}}>
                    <Grid container spacing={3}>
                        {
                            productsInCart.map((item, index) => {
                                return(
                                    <Grid item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}} key={index}>
                                        <Box sx={{boxShadow: 10, justifyContent: 'center', paddingBottom: '1rem'}}>
                                            <Grid container direction={lowerThanSmall ? 'column' : 'row' } spacing={1}>
                                                <Grid item xs={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <img style={{ height: '200px', width: '100%'}} src={item.image} />
                                                </Grid>
                                                <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Typography variant='h6' sx={{textAlign: 'center'}}>
                                                        {item.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Stack direction={lowerThanSmall ? 'row' : 'column' } spacing={1}>
                                                        {
                                                            lowerThanSmall
                                                            ?<>
                                                            <Button onClick={() => dispatch(minusCount(item.id))}>
                                                                <RemoveIcon />
                                                            </Button>
                                                            <Typography variant='h6' sx={{textAlign: 'center'}}>{item.count}</Typography>
                                                            <Button onClick={() => dispatch(plusCount(item.id))}>
                                                                <AddIcon />
                                                            </Button>
                                                            </>
                                                            :<>
                                                            <Button onClick={() => dispatch(plusCount(item.id))}>
                                                                <AddIcon />
                                                            </Button>
                                                            <Typography variant='h6' sx={{textAlign: 'center'}}>{item.count}</Typography>
                                                            <Button onClick={() => dispatch(minusCount(item.id))}>
                                                                <RemoveIcon />
                                                            </Button>
                                                            </>
                                                        }
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Typography fontSize={20} sx={{color:'green'}}>
                                                        * {item.price}$ = {item.count * item.price}$
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Button 
                                                        variant='contained' 
                                                        color='error' 
                                                        sx={!lowerThanSmall ? {height: '50px', width: '100%', marginRight: '1rem'} : {height: '50px', width: '100%'}}
                                                        onClick={() => deleteProductFromCart(item.id)}
                                                    >
                                                        <DeleteForeverIcon fontSize='large'/>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Typography variant='h4' sx={{textAlign: 'center', marginTop: '1rem'}}>Total price: {total}$</Typography>
                        <Button 
                            variant='contained' 
                            color='success' 
                            sx={{width: '66%', marginTop: '1rem'}}
                            onClick={() => navigate('/order')}
                        >
                            Make Order
                        </Button>
                    </Box>
                </Container>
                :<Container sx={{marginTop: '3rem', marginBottom: '1rem'}}>
                    <Typography variant='h3' sx={{textAlign: 'center'}}>Your cart is empty yet</Typography>
                </Container>
            }
        </Box>
        
    )
}

export default Cart
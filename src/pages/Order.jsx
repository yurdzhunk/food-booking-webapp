import { Alert, Box, Button, Collapse, Container, IconButton, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { emptyCart } from '../redux/cartProducts';
import { doc, setDoc } from "firebase/firestore"; 
import {db, storage} from '../firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [adress, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [orderIsMade, setOrderIsMade] = useState(false);
    const [colorName, setColorName] = useState('primary');
    const [colorSurname, setColorSurname] = useState('primary');
    const [colorAdress, setColorAdress] = useState('primary');
    const [colorPhone, setColorPhone] = useState('primary');
    const [isOpen, setIsOpen] = useState(false);

    const theme = useTheme();
    const lowerThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const productsInCart = useSelector((state) => state.cartProducts.list);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const randomOrderID = () => {
        let s = 'abcdefghklmnqtp1fsfs234567890';
        const a = s.split('');
        a.sort((a, b) => {return (0.5 - Math.random())})
        s = a.join('');
        return s
    }

    const confirmOrder = async () => {
        if(name == '' || surname == '' || adress == '' || phone == ''){
            if(name == ''){
                setColorName('warning');
            }
            if(surname == ''){
                setColorSurname('warning');
            }
            if(adress == ''){
                setColorAdress('warning');
            }
            if(phone == ''){
                setColorPhone('warning');
            }
            setIsOpen(true);
            return
        }
        setIsOpen(false);
        let id = randomOrderID();
        await setDoc(doc(db, "orders", id.toString()), {
            name: name,
            phone : phone,
            adress: adress,
            order: JSON.stringify(productsInCart)
          });
        setName('');
        setPhone('');
        setAdress('');
        dispatch(emptyCart());
        setOrderIsMade(true);
    }

    return (    <Box>
                    <Collapse in={isOpen}>
                        <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            >
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        color='warning'
                        >
                        Some order details fields are missed!
                        </Alert>
                    </Collapse>
                    {(orderIsMade)
                        ? 
                                <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                    // onClick={() => {
                                    //     setOpen(false);
                                    // }}
                                    >
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                                >
                                    Your oder is received!
                                </Alert>
                        :       <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                <Typography variant='h4' sx={{textAlign: 'center'}}>Fill in Order Form</Typography>
                                <Stack spacing={2} direction='column' sx={{marginTop: '3rem', alignItems: 'center'}}>
                                    <TextField
                                        required
                                        label='Name'
                                        placeholder='Name'
                                        sx={lowerThanSmall ?{width: '20rem'} :{width: '30rem'}}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        color={colorName}
                                    />
                                    <TextField
                                        label='Surname'
                                        placeholder='Surname'
                                        sx={lowerThanSmall ?{width: '20rem'} :{width: '30rem'}}
                                        value={surname}
                                        onChange={(e) => setSurname(e.target.value)}
                                        color={colorSurname}
                                    />
                                    <TextField
                                        required
                                        label='Delivery adress'
                                        placeholder='Deliver adress'
                                        sx={lowerThanSmall ?{width: '20rem'} :{width: '30rem'}}
                                        value={adress}
                                        onChange={(e) => setAdress(e.target.value)}
                                        color={colorAdress}
                                    />
                                    <TextField
                                        required
                                        label='Phone'
                                        placeholder='Phone'
                                        sx={lowerThanSmall ?{width: '20rem'} :{width: '30rem'}}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        color={colorPhone}
                                    />
                                </Stack>
                                <Button variant='contained' color='success' sx={{width: '62%', marginTop: '1rem'}} onClick={() => confirmOrder()}>
                                    Confirm Order
                                </Button>
                            </Container>
                        }
                </Box>

    )
}

export default Order
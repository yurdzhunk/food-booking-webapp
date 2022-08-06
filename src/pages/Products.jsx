import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import {db, storage} from '../firebase-config';
import { useLocation } from 'react-router-dom';
import { addProduct } from '../redux/cartProducts';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Products = () => {

    const {state} = useLocation();
    const {store} = state;
    const [products, setProducts] = useState([]);

    const [productsImages, setProductsImages] = useState([]);
    const [productsCounters, setProductsCounters] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(store != ''){
            console.log(store)
            const getProductsData = async () => {
            const q = query(collection(db, 'products'), where('store', '==', store))
            const data = await getDocs(q);
            let notSortedData = (data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setProducts(notSortedData.sort((a, b) => a.id - b.id));
            }
    
            getProductsData();
        }

    }, [store]);

    useEffect(() => {

        const addProductsImages = async () => {
            const tempProductImages = await Promise.all(
                products.map(async (product) => {
                    let storeImageRef = ref(storage, 'gs://product-store-419ec.appspot.com' + product.image);
                    let imageURL = await getDownloadURL(storeImageRef);
                    return imageURL
                })
            ) 
            setProductsImages([...tempProductImages]);
        }

        const addProductsCounters = () => {
            let tempArray = []
            for(let i of products){
                tempArray.push(1);
            }
            setProductsCounters(tempArray);
        }

        if(products.length > 0){
            addProductsImages();
            addProductsCounters();
        }

    }, [products, store])

    const plusCount = (id) => {
        let tempArray = [...productsCounters];
        tempArray[id]++;
        setProductsCounters([...tempArray])
    }

    const minusCount = (id) => {
        let tempArray = [...productsCounters];
        if(tempArray[id] != 1){
            tempArray[id]--;
            setProductsCounters([...tempArray])
        }
    }

    const addToCart = (item, image, count) => {
        console.log(item)
        let prod = {
            id: item.id,
            name: item.name,
            price: item.price,
            store: item.store,
            image: image,
            count: count,
        }
        dispatch(addProduct(prod));
    }


    return (
        <Container sx={{marginTop: '3rem', marginBottom: '1rem'}}>
            <Grid container spacing={3}>
                {
                    products.map((item, index) => {
                        return(
                            <Grid item xs={6} sx={{justifyContent: 'center', alignItems: 'center'}} key={index}>
                                <Box sx={{boxShadow: 10, justifyContent: 'center', paddingBottom: '1rem'}}>
                                    <Grid container direction='column' spacing={1}>
                                        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center'}}>
                                            <img style={{ height: '200px'}} src={productsImages[index]} />
                                        </Grid>
                                        <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
                                            <Typography variant='h4' sx={{textAlign: 'center'}}>
                                                {item.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
                                            <Typography fontSize={20} sx={{color:'green'}}>
                                                {item.price}$
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                                            <Button onClick={() => minusCount(index)}>
                                                <RemoveIcon/>
                                            </Button>
                                            <Typography fontSize={20} sx={{width: '2rem', textAlign: 'center'}}>
                                                {productsCounters[index]}
                                            </Typography>
                                            <Button onClick={() => plusCount(index)}>
                                                <AddIcon/>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center'}}>
                                            <Button variant='contained' onClick={() => addToCart(item, productsImages[index], productsCounters[index])}>
                                                Add to Cart
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Products
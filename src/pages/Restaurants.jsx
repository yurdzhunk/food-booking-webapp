import { Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import Map from '../components/Map'

const Restaurants = () => {

    const [restaurant, setRestaurant] = useState('Mcdonalds');

    return (
        <Container sx={{marginTop: '3rem'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Choose restaurant</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={restaurant}
                            onChange={(e) => setRestaurant(e.target.value)}
                        >
                            <FormControlLabel value="Mcdonalds" control={<Radio />} label="Mcdonalds" />
                            <FormControlLabel value="KFC" control={<Radio />} label="KFC" />
                            <FormControlLabel value="Dominos" control={<Radio />} label="Dominos" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={9} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Map restaurant={restaurant}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Restaurants
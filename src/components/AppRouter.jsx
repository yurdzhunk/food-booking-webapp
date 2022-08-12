import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from '../pages/Cart';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Products from '../pages/Products';
import Restaurants from '../pages/Restaurants';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function AppRouter() {
  return (
    <Routes>
          <Route path='/main' element= {<Main/>} />
          <Route path='/products' element= {<Products/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/restaurants' element= {<Restaurants/>} />
          <Route path='/order' element= {<Order/>} />
          <Route path='/signin' element= {<SignIn/>} />
          <Route path='/signup' element= {<SignUp/>} />
          <Route path='*' element= {<Navigate to='/main' />} />
    </Routes>
  )
}

export default AppRouter
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from '../pages/Cart';
import Main from '../pages/Main';
import Order from '../pages/Order';
import Products from '../pages/Products';

function AppRouter() {
  return (
    <Routes>
          <Route path='/main' element= {<Main/>} />
          <Route path='/products' element= {<Products/>} />
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/order' element= {<Order/>} />
          <Route path='*' element= {<Navigate to='/main' />} />
    </Routes>
  )
}

export default AppRouter
import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import CartPage from './components/CartPage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductsPage from './components/ProductsPage';
import NotFound from './components/NotFound';

//first do navbar
//then connect navbar to cart page
//connect product details to products

const App = () => {

  const [itemsInCart, setItemsInCart] = useState([])


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path=':productId' element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

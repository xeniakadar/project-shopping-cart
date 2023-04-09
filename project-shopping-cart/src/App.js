import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import CartPage from './components/CartPage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductsPage from './components/ProductsPage';
import NotFound from './components/NotFound';
import productData from './productData';

const App = () => {

  const [itemsInCart, setItemsInCart] = useState([])

  function addToCart(productId) {
    const itemToAdd = productData.find(item => productId === item.id)

    setItemsInCart(prevItemsInCart => {
      return (
       [ ...prevItemsInCart,
        itemToAdd]
      )
    })
  }

  return (
    <BrowserRouter>
      <Navbar itemsInCart={itemsInCart} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path=':productId' element={<ProductDetails itemsInCart={itemsInCart} addToCart={addToCart}/>} />
        </Route>
        <Route path="/cart" element={<CartPage itemsInCart={itemsInCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}




export default App;

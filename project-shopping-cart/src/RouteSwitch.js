import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import App from './App'
import CartPage from './components/CartPage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductsPage from './components/ProductsPage';

//first do navbar
//then connect navbar to cart page
//connect product details to products

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

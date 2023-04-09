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

//first do navbar
//then connect navbar to cart page
//connect product details to products

const App = () => {

  const [itemsInCart, setItemsInCart] = useState([
    {
      id: "1",
      img: "./images/img1",
      name: "Grumpy Cat Poster",
      description: "Everyone's favorite cat who loves to hate",
      price: 15
    }
  ])

  // const [fakeItem, setFakeItem] = useState([1])

  // function addToCart() {
  //   const itemToAdd = "hi"

  //   setFakeItem(prevItemsInCart => {
  //     return ([
  //       ...prevItemsInCart,
  //       itemToAdd]
  //     )
  //   })

  //   console.log(fakeItem)
  // }
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

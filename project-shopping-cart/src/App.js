import React, { useEffect } from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductsPage from './components/ProductsPage';
import NotFound from './components/NotFound';
import productData from './productData';


const App = () => {

  const [itemsInCart, setItemsInCart] = useState([]);
  const [subtotalPayment, setSubtotalPayment] = useState(0);
  const [quantityOfItems, setQuantityOfItems] = useState(0);

  function addToCart(id) {
    const existingItem = itemsInCart.find((inCartItem) => inCartItem.id === id);
    if (existingItem) {
      setItemsInCart(
        itemsInCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setItemsInCart([...itemsInCart, { id, quantity: 1 }]);
    }
  }

  function deleteFromCart(id) {
    const existingItem = itemsInCart.find((inCartItem) => inCartItem.id === id);
    if (existingItem.quantity === 1) {
      setItemsInCart(itemsInCart.filter((item) => item.id !== id));
    } else {
      setItemsInCart(
        itemsInCart.map((item) => {
          if (id === item.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      );
    }
  }

  const updateCart = (id) => (event) => {
    setItemsInCart(
      itemsInCart.map((item) => {
        if (id === item.id) {
          return {...item, quantity: Number(event.target.value)}
        } else {
          return item
        }
      })
    )
  }

  function emptyCart() {
    setItemsInCart([])
  }

  useEffect(() => {
    let totalPrice = 0;
    let totalQuantity = 0;

    itemsInCart.forEach((item) => {
      totalPrice += item.quantity * (productData.find((product) => product.id === item.id).price);
    });
    setSubtotalPayment(totalPrice);

    itemsInCart.forEach((item) => {
      totalQuantity += item.quantity
    })
    setQuantityOfItems(totalQuantity);
  },[itemsInCart])


  return (
    <BrowserRouter>
      <Navbar quantityOfItems={quantityOfItems} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products">
          <Route index element={<ProductsPage addToCart={addToCart} />} />
          <Route path=':productId' element={<ProductDetails itemsInCart={itemsInCart} addToCart={addToCart}/>} />
        </Route>
        <Route path="/cart" element={<CartPage
          itemsInCart={itemsInCart}
          quantityOfItems={quantityOfItems}
          subtotalPayment={subtotalPayment}
          deleteFromCart={deleteFromCart}
          addToCart={addToCart}
          emptyCart={emptyCart}
          updateCart={updateCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}




export default App;

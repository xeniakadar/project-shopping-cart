import React from "react";
import productData from "../productData";


export default function Cart({ itemsInCart, updateCart, emptyCart, subtotalPayment, deleteFromCart, addToCart, quantityOfItems }) {

  const cartItems = itemsInCart.map(item => {
  return (
    <div key={item.id}>
      {/* <h4>{item.name} - {item.price} - {item.quantity}</h4> */}
      <h1>{productData.find((product) => product.id === item.id).name} -  {productData.find((product) => product.id === item.id).price}</h1>
      <input
        type="number"
        name="cartItems"
        value={item.quantity}
        min="1"
        onChange={updateCart(item.id)}
      />
      {/* <button onClick={() => addToCart(item.id)}>Add quantity</button> */}
      <button onClick={() => deleteFromCart(item.id)}>Delete</button>
    </div>)
  })

  return (
    <>
      <h1>Cart</h1>
      {itemsInCart.length === 0 && <h1>Your cart is Empty</h1>}
      <ul>
        {cartItems}
      </ul>
      {itemsInCart.length > 0 && <button onClick={() => emptyCart()}>Empty Cart</button>}
      {subtotalPayment > 0 && <h4>Total (EUR) €{subtotalPayment} </h4>}
    </>
  )
}

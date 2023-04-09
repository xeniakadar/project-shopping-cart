import React from "react";

export default function Cart(props) {
  const cartItems = props.itemsInCart.map(item => {
    return <h4 key={item.id}>{item.name}</h4>
  })

  return (
    <>
      <h1>Cart</h1>
      <div>
        {cartItems}
      </div>
    </>
  )
}

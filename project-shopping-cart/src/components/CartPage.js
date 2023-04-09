import React from "react";
import uniqid from 'uniqid';

export default function Cart({ itemsInCart, subtotalPayment, deleteFromCart }) {

  // const itemAndQuantityObject = itemsInCart.reduce((allItems, item) => {
  //   if (!allItems[item.id]) {
  //     allItems[item.id] = 0;
  //   }
  //   allItems[item.id]++;
  //   return allItems
  // }, {});
  // // returns {1: 3, 5: 2}

  // const itemAndQuantity = [];
  // for (const [key, value] of Object.entries(itemAndQuantityObject)) {
  //   itemAndQuantity.push({ [key]: value });
  // }
  // //returns [{1:3}, {5:2}]

  // function itemName(id) {
  //   const itemName = itemsInCart.find(item => item.id === id);
  //   return itemName.name
  // }

  // const cartItems = itemAndQuantity.map((item)=> {
  //   return (
  //   <li key={Object.keys(item)[0]}>
  //     {itemName(Object.keys(item)[0])}: {Object.values(item)[0]}
  //   </li>
  //   )
  // });

    const cartItems = itemsInCart.map(item => {
    return (
      <div key={uniqid()}>
        <h4>{item.name} - {item.price}</h4>
        {/* <button onClick={() => deleteFromCart(item.purchase_id)}>X</button> */}
        <button onClick={() => deleteFromCart(item.id)}>X</button>
      </div>)
  })
  return (
    <>
      {itemsInCart.length === 0 && <h1>Your cart is Empty</h1>}
      <h1>Cart</h1>
      <ul>
        {cartItems}
      </ul>
      {subtotalPayment > 0 && <h4>Total (EUR) €{subtotalPayment} </h4>}

    </>
  )
}

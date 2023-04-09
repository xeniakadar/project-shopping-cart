import React from "react";

export default function Cart({itemsInCart}) {

  const itemAndQuantityObject = itemsInCart.reduce((allItems, item) => {
    if (!allItems[item.id]) {
      allItems[item.id] = 0;
    }
    allItems[item.id]++;
    return allItems
  }, {});
  // returns {1: 3, 5: 2}

  const itemAndQuantity = [];
  for (const [key, value] of Object.entries(itemAndQuantityObject)) {
    itemAndQuantity.push({ [key]: value });
  }
  //returns [{1:3}, {5:2}]

  function itemName(id) {
    const itemName = itemsInCart.find(item => item.id === id);
    return itemName.name
  }

  const cartItems = itemAndQuantity.map((item)=> {
    return (
    <li key={Object.keys(item)[0]}>
      {itemName(Object.keys(item)[0])}: {Object.values(item)[0]}
    </li>
    )
  });

  return (
    <>
      {itemsInCart.length === 0 && <h1>Your cart is Empty</h1>}
      <h1>Cart</h1>
      <ul>
        {cartItems}
      </ul>
      <h4>Subtotal: </h4>
    </>
  )
}

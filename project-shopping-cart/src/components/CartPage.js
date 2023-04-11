import React from "react";
import productData from "../productData";
import "../styles/cart.css"


export default function Cart({ itemsInCart, updateCart, emptyCart, subtotalPayment, deleteFromCart, addToCart }) {

  const cartItems = itemsInCart.map(item => {
  return (
    <div key={item.id} className="cart--products">
      <img className="cart--image" src={require(`${productData.find((product) => product.id === item.id).img}`)} alt={productData.find((product) => product.id === item.id).name} />
      <div>
        <h2 className="cart--titletags">{productData.find((product) => product.id === item.id).name}</h2>
        <h3 className="cart--pricetags">€{productData.find((product) => product.id === item.id).price}</h3>
      <div>
        <button className="cart--quantity-btn" onClick={() => deleteFromCart(item.id)}>-</button>
          <input
            id="cart--input"
            type="number"
            name="cartItems"
            value={item.quantity}
            min="1"
            onChange={updateCart(item.id)}
        />
        <button className="cart--quantity-btn" onClick={() => addToCart(item.id)}>+</button>
      </div>
      </div>
    </div>)
  })

  return (
    <div className="cart--container">
      {itemsInCart.length === 0 &&  <h1 className="cart--empty">Your cart is Empty</h1>}
      {itemsInCart.length > 0 &&
        <div className="cart--products-container">
          <h1 className="cart--mybag">My Bag</h1>
            <ul>
              {cartItems}
            </ul>
          <button className="cart--empty-btn" onClick={() => emptyCart()}>Empty Cart</button>
        </div>}
      <div>
       {itemsInCart.length > 0 && <div className="cart--summary">
          <h1>Order Summary</h1><hr />
          <h1>Order Total €{subtotalPayment}</h1>
          <button className="cart--checkout">Checkout Securely</button>
          <h3>Express Checkout</h3>
          <p>All order details will be taken directly from your payment provider, please ensure you select the correct addresses before submitting your order. From the payment provider, you will be directed to the order confirmation page. If you have a discount code, please choose ‘Checkout Securely'.</p>
          <button className="cart--checkoutpaypal">Pay with <span>PayPal</span></button>
        </div>}
      </div>
    </div>
  )
}

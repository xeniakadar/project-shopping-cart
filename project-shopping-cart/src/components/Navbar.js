import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
import cartSvg from "./images/cart.svg";


export default function Navbar(props) {
  return (
    <nav className='nav--container'>
      <div className='nav--logo'>
        <NavLink to="/">
          <h1>LIQR</h1>
        </NavLink >
      </div>
      <div className='nav--nav-items'>
        <NavLink className={'nav--links'} to="/">
          Homepage
        </NavLink >
        <NavLink className={'nav--links'} to="/products">
          Products
        </NavLink>
        <NavLink className={'nav--links link-cart'} to="/cart">
          <img className='cart-img' src={cartSvg} alt='shopping cart' />
          {props.quantityOfItems > 0 &&<h4>{props.quantityOfItems}</h4>}
        </NavLink>
      </div>
    </nav>
  )
}

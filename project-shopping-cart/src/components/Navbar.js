import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
export default function Navbar(props) {
  return (
    <nav className='nav--container'>
      <div className='nav--logo'>
        <h1>LIQR</h1>
      </div>
      <div className='nav--nav-items'>
        <NavLink id={'nav--links'} to="/">
          Homepage
        </NavLink ><br></br>
        <NavLink id={'nav--links'} to="/products">
          Products
        </NavLink><br></br>
        <NavLink id={'nav--links'} to="/cart">
          <img className='cart-img' src={require('./images/cart.svg')} alt='shopping cart' />
          ({props.quantityOfItems})
        </NavLink>
      </div>
    </nav>
  )
}

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"
import cartSvg from "./images/cart.svg";
import menuSvg from "./images/menu.svg";
import closeSvg from "./images/close.svg";


export default function Navbar(props) {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = e => {
    setMenuActive(active => !active);
  };

  return (
    <nav className={`nav--container ${menuActive? 'menu--open' : ''}`}>
        <div className='nav--logo'>
          <NavLink to="/">
            <h1 className='logo'>L I Q R</h1>
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

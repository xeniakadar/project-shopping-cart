import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav>
      <NavLink to="/">
        Homepage
      </NavLink><br></br>
      <NavLink to="/products">
        Products
      </NavLink><br></br>
      <NavLink to="/cart">
        Cart ({props.quantityOfItems})
      </NavLink>
    </nav>
  )
}

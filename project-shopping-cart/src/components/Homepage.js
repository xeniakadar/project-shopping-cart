import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/homepage.css"

export default function Homepage() {
  return (
    <div className="home--container">
      <div className="home--text-container">
        <h1>Cute water bottle</h1>
        <p>We're laucnhing our cutest water bottle line yet</p>
        <NavLink to="/products">
          <button>SHOP NOW</button>
        </NavLink>
      </div>
      <div className="home--img-container">
        <img src={require('./images/about.jpg')} alt="bottle"/>
      </div>
    </div>
  )
}

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/homepage.css"

export default function Homepage() {
  return (
    <div className="home--container">
      <div className="home--text-container">
        <h1>Cute water bottle</h1>
        <p>We're launching our cutest water bottle line yet</p>
        <NavLink to="/products">
          <button className="home--btn">SHOP NOW</button>
        </NavLink>
      </div>
      <div className="home--img-container">
      </div>
    </div>
  )
}

import React from "react";
import productData from "../productData";
import { useParams } from "react-router-dom";
import "../styles/productdetails.css"

export default function ProductDetails(props) {
  const {productId} = useParams();
  const thisProduct = productData.find(data => data.id === productId)

  return (
    <div key={thisProduct.id}>
      <img
        className="product--image"
        src={require(`${thisProduct.img}`)}
        alt={thisProduct.name}
      />
      <div>
        <h1>{thisProduct.name}</h1>
        <h1>€{thisProduct.price}</h1>
        <p>{thisProduct.description}</p>
        <button onClick={() => props.addToCart(thisProduct.id)}>Add to bag</button>
      </div>
    </div>
  )
}

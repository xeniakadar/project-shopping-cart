import React from "react";
import productData from "../productData";
import { useParams } from "react-router-dom";


export default function ProductDetails(props) {
  const {productId} = useParams();
  const thisProduct = productData.find(data => data.id === productId)

  return (
    <div key={thisProduct.id}>
      <h1>{thisProduct.name}</h1>
      <h1>€{thisProduct.price}</h1>
      <p>{thisProduct.description}</p>
      {/*add images */}
      <button onClick={() => props.addToCart(thisProduct.id)}>Add to cart</button>
    </div>
  )
}

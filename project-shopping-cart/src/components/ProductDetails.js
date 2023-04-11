import React from "react";
import productData from "../productData";
import { useParams } from "react-router-dom";
import "../styles/productdetails.css"

export default function ProductDetails(props) {
  const {productId} = useParams();
  const thisProduct = productData.find(data => data.id === productId)

  const [firstImage, setFirstImage] = React.useState(thisProduct.img);

  return (
    <div className="product--container" key={thisProduct.id}>
      <div>
        <img
          className="product--image"
          src={require(`${firstImage}`)}
          alt={thisProduct.name}
          onMouseOver={() => firstImage === thisProduct.img ?
            setFirstImage(thisProduct.img2) :
            setFirstImage(thisProduct.img)}
          onMouseLeave={() => firstImage === thisProduct.img ?
            setFirstImage(thisProduct.img2) :
            setFirstImage(thisProduct.img)}
        />

      </div>
      <div className="product--info">
        <h1 className="product--name">{thisProduct.name}</h1>
        <h1 className="product--price">€{thisProduct.price}</h1>
        <p className="product--description">{thisProduct.description}</p>
        <button className="product--btn" onClick={() => props.addToCart(thisProduct.id)}>Add to bag</button>
      </div>
    </div>
  )
}

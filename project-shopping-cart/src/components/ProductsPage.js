import React from 'react'
import productData from '../productData';
import { NavLink } from 'react-router-dom';
import "../styles/productspage.css"


export default function ProductsPage() {

  const productDataList = productData.map(product => {
    return (
      <div
        key={product.id}
        className='productspage--item'

>

        <NavLink to={`${product.id}`}>
          <img
          className="productpage--images"
           src={require(`${product.img}`)}
          alt={product.name}
          />
        </NavLink>
        <div className='productspage--details'>
          <h3><NavLink to={`${product.id}`}>{product.name}</NavLink></h3>
          <p>€{product.price}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='productspage--container'>
      <div className='productspage--mainimage'>
      </div>
      <div>
        <h1 className='productspage--title'>Our Bottles</h1>
        <div className='productspage--info'>
          {productDataList}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import productData from '../productData';
import { NavLink } from 'react-router-dom';

export default function ProductsPage() {

  const productDataList = productData.map(product => {
    return (
      <div key={product.id}>
        <h3><NavLink to={`${product.id}`}>{product.name}</NavLink> - €{product.price}</h3>
      </div>
    )
  })

  return (
    <>
      <h1>Products Page</h1>
      {productDataList}
    </>
  )
}

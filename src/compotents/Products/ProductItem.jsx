import React from 'react'
import img from "../../images/apple.jpg"
import "./Products.css"

export default function ProductItem({product,className,onAdd}) {

    const onClickHandler = ()=>{
        onAdd(product)
    }
  return (
    <div className='product_item'>       
        <img className='img' src={img} alt="apple" />
        <div className='title'>{product.title}</div>
        <div className='description'>{product.description}</div>
        <div className='price'>{product.price}</div>
        <button onClick={onClickHandler} className='button'>
            Add 
        </button>
    </div>
  )
}
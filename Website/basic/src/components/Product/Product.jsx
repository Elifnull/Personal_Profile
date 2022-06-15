import React from 'react'
import "./Product.css"

const Product = ({img,link,proj}) => {
    return (
        <div className='product'>
            <div className='product-browser'>
                <div className='browserCircle'></div>
                <div className='browserCircle'></div>
                <div className='browserCircle'></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={proj} className="projectImage"/>
            </a>
        </div>
    )
}

export default Product

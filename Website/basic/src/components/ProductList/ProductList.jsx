import React from 'react'
import "./ProductList.css"
import Product from "../Product/Product"
import { products } from '../../data/projects'

const ProductList = () => {
    return (
        <div className='ProductList'>
            <div className="productListText">
                <h1 className='productListTitle'>My Projects</h1>
                <p className='productListDesc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Magnam facilis doloremque itaque iure ad rem beatae illum doloribus 
                    nulla voluptate dolore, quo et sunt libero dolorem temporibus vitae est atque.
                </p>
            </div>
            <div className="productList-List">
                { products.map((item)=>
                <Product/>
                )}
                
            </div>
        </div>
    )
}

export default ProductList;
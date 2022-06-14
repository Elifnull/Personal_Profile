import React from 'react'
import "./ProductList.css"
import Product from "../Product/Product"

const ProductList = () => {
    return (
        <div className='ProductList'>ProductList
            <div className="productListText">
                <h1 className='productListTitle'>Create & inspire</h1>
                <p className='productListDesc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Magnam facilis doloremque itaque iure ad rem beatae illum doloribus 
                    nulla voluptate dolore, quo et sunt libero dolorem temporibus vitae est atque.
                </p>
            </div>
            <div className="productList-List">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList;
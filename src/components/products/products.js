import React, { Component } from 'react'
import "./products.css"


export default function Products() {
    return (

        <div className="pagecolor">


            <div className="seelingProduct">Our best selling product</div>
            <div className="productDesc">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do <br/> eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </div>
            <div className="product">
                <div className="productItems" >
                    <img className="itemsImage" src="Rectangle 60.png"/>
                    <h1 className="productName">Product Name</h1>
                    <p className="productPrice">Price</p>
                    <a className="buyBtn">Buy Now</a>
                </div>

                <div className="productItems" >
                    <img className="itemsImage" src="Rectangle 60.png"/>
                    <h1 className="productName">Product Name</h1>
                    <p className="productPrice">Price</p>
                    <a className="buyBtn">Buy Now</a>
                </div>
                <div className="productItems" >
                    <img className="itemsImage" src="Rectangle 60.png"/>
                    <h1 className="productName">Product Name</h1>
                    <p className="productPrice">Price</p>
                    <a className="buyBtn">Buy Now</a>
                </div>


            </div>
        </div>
    )
}
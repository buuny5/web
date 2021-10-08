import React from 'react'
import "./header.css"


export default function Header() {
    return (
        <div>
            <div className="headerContainer">
                <div className="nav-container">
                    <a className="logo">LOGO</a>
                    
                        <a className='text'>About us</a>
                        <a className='text'>Services</a>
                        <a className='text'>Product</a>
                        <a className='text'>Reviews</a>
                        <a className='text'>FAQ</a>
                </div>

                <div className="logindiv">
                    <a className="btn-login">Login</a>
                </div>
            </div>

        </div>
    )
}

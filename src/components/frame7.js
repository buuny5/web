import React from 'react'
import './frame7.css'

export default function Frame7() {
    return (
        <div className="frame7">
            <h1 className="Frame6Heading">Our customers reviews for our<br /> food delivery satisfaction</h1>
            <p className="frame7para" style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="frame7card">

                <div style={{ padding: '30px' }} classNames="flex1 dogcard">
                    <div>
                        <img style={{ marginRight: '20px' }} alt="star" src="star.png" />
                        <img style={{ marginRight: '20px' }} alt="star" src="star.png" />
                        <img style={{ marginRight: '20px' }} alt="star" src="star.png" />
                        <img style={{ marginRight: '20px' }} alt="star" src="star.png" />
                        <img style={{ marginRight: '20px' }} alt="star" src="star.png" />
                    </div>

                    <h1 className="frame7header">Juliana C.</h1>
                    <h5 className="frame7headerdesc">“One of the most exciting innovations in pet food,</h5>
                    <p className="frame7para">“One of the most exciting innovations in pet food, The Farmer’s Dog is a safe alternative to conventional brands.One of the most exciting innovations in pet food, The Farmer’s Dog is a safe alternative</p>
                </div>

                <div classNames="flex1 frame7image">
                    <img className="dogimages" src="Screenshot_29.png" />
                </div>
                <div classNames="flex1 frame7image">
                    <img className="dogimages" src="Screenshot_29 2.png" />
                </div>
            </div>

        </div>

    )
}

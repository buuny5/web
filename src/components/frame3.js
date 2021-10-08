import React from 'react';
import './frame3.css';

export default function Frame3() {
    return (
        <div style={{ padding: '40px', backgroundColor: '#FAAE02' }}>
            <div className="frame3Headings">
                <h1 className="frame2Heading">Our Services for you</h1>
                <p className="frame3Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="frame3container">
                <div className="frame3card">
                    <div className="frame3card2">
                        <img className="vector" src="Vector 3.png" />

                    </div>
                    <div className="frame3cards">
                        <h1 className="frame3heading">Vitamins and minerals</h1>
                        <p className="frame3containerPara">HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
                <div className="frame3card">
                    <div className="frame3card2">
                        <img className="vector" src="Vector 3.png" />

                    </div>
                    <div className="frame3cards">
                        <h1 className="frame3heading">on time delivery</h1>
                        <p className="frame3containerPara">HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
                <div className="frame3card">
                    <div className="frame3card2">
                        <img className="vector" src="Vector 3.png" />

                    </div>
                    <div className="frame3cards">
                        <h1 className="frame3heading">Secured packging</h1>
                        <p className="frame3containerPara">HuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

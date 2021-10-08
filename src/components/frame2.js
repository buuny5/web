import React from 'react';
import './frame2.css';


export default function Frame2() {
    return (
        <div style={{ padding: '40px 0px' }}>
            <div className="frame2Headings">
                <h1 className="frame2Heading">Freshly made food for good health.</h1>
                <p className="frame2Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="frame2container">
                <div className="frame2card">
                    <div classNames="frame2cards">
                        <h1 className="frame2heading">Real Food</h1>
                        <p className="frame2containerPara">Human-grade meat and veggies in simple recipes, made for dogs</p>

                    </div>
                    <div className="frame2cards">
                        <h1 className="frame2heading">Standard Kitchen</h1>
                        <p className="frame2containerPara">Safety and quality never before available to pets </p>

                    </div>
                </div>
                <div className="frame2card2">
                    <div style={{display:'flex'}}>
                        <img className="lambCard" src="lamb-card-2x2.png" />

                    </div>
                    <div>
                        <a className="recipies-btn">See your recipies</a>

                    </div>

                </div>
                <div className="frame2card">
                    <div className="frame2cards">
                        <h1 className="frame2heading">Made Fresh</h1>
                        <p className="frame2containerPara">Maintain whole food and nutritional integrity</p>

                    </div>
                    <div className="frame2cards">
                        <h1 className="frame2heading">Expert tested</h1>
                        <p className="frame2containerPara">Nutrition that exceeds industry standards for dogs (AAFCO)</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

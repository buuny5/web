import React from 'react'
import './frame5.css';

export default function Frame5() {
    return (
        <div style={{ padding: '40px 0px' }}>
            <div className="frame2Headings">
                <h1 className="frame2Heading">Freshly made food for good health.</h1>
                <p className="frame2Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="container5">
                <div className="card">
                    <div classNames="cards">
                        <h1 className="frame5heading">Feature 1</h1>
                        <p className="containerPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className="cards">
                        <h1 className="frame5heading">Feature 2</h1>
                        <p className="containerPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>
                <div className="imageCard">
                    <img className="packet" style={{ marginBottom: '50px' }} src="Rectangle 60.png" />
                    {/* <a className="recipies-btn">See your recipies</a> */}

                </div>
                <div className="card">
                    <div className="cards">
                        <h1 className="frame5heading">Feature 3</h1>
                        <p className="containerPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className="cards">
                        <h1 className="frame5heading">Feature 4</h1>
                        <p className="containerPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

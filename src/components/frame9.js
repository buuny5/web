import React from 'react'
import './frame9.css'

export default function Frame9() {
    return (
        <div className="frame9">
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 0px 20px 0px' }}>
                <div style={{ display: 'flex' }}>
                    <img className="iconDesign" src="Fill1.png" />
                    <h6 className="frame9h6">Address</h6>
                </div>
                <div style={{ display: 'flex' }}>
                    <img className="iconDesign" src="Fill1.png" />
                    <h6 className="frame9h6">Conatct</h6>
                </div>
                <div style={{ display: 'flex' }}>
                    <img className="iconDesign" src="Fill1.png" />
                    <h6 className="frame9h6">Email</h6>
                </div>

            </div>
            <div className="foot" style={{ backgroundColor: '#F7E7C2', display: 'flex', justifyContent: 'center' }}>
                <h5 className='frame9bottom' >About</h5>
                <h5 className='frame9bottom' >FAQ</h5>
                <h5 className='frame9bottom' >Reviews</h5>
                <h5 className='frame9bottom' >Log in</h5>
                <h5 className='frame9bottom' >Sign up</h5>
            </div>
            <div className="foot2">
                <div className="foot2end">
                    <h5 className="health">Free Health and Nutrition Tips</h5>
                    <div className="footButton" style={{ display: 'flex', height: '40px'}}>
                        <input alt='Enter email' style={{ padding: '0px', border: 'none', height: '40px', borderRadius: '5px', color: 'none' }}></input>
                        <img className='arrow' style={{ height: '25px', width:'20px' }} src="Arrow - Right 2.png" />
                    </div>

                </div>
                <div className="foot2end">
                    <img className="foot2icon" src='Vector.png' />
                    <img className="foot2icon" src='Vector.png' />
                    <img className="foot2icon" src='Vector2.png' />
                    <img className="foot2icon" src='Vector2.png' />

                </div>
                <div className="foot2end lastCard last" >
                    <p className="madeclass">Made with love in India</p>
                    <p className='copyright'>© 2021 name™</p>
                    <p className='TnC'>Privacy Policy • Terms and Conditions</p>

                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './footer.css'

import{FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaPiggyBank/>
                        </div>

                        <div className='detail'>
                            <h3>Great Saving</h3>
                            <p>Lorwm ipsum dolor sit amet,</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <FaShippingFast/>
                        </div>

                        <div className='detail'>
                            <h3>Free delivery</h3>
                            <p>Lorwm ipsum dolor sit amet,</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphonesAlt/>
                        </div>

                        <div className='detail'>
                            <h3>24/7 support</h3>
                            <p>Lorwm ipsum dolor sit amet,</p>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='icon_box'>
                            <FaWallet/>
                        </div>

                        <div className='detail'>
                            <h3>money back</h3>
                            <p>Lorwm ipsum dolor sit amet,</p>
                        </div>
                    </div>
                </div>

                <div className='right_box'>
                    <div className='header'>
                        <img src='images/logo.png' alt=''></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et bibendum massa. Sed accumsan ex vitae diam faucibus posuere</p>
                    </div>

                    <div className='bottom'>
                        <div className='box'>
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>products</h3>
                            <ul>
                                <li>delivery</li>
                                <li>track oder</li>
                                <li>new product</li>
                                <li>old product</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>contact us</h3>
                            <ul>
                                <li>405, TP Hồ Chí Minh</li>
                                <li>+(84)368746003</li>
                                <li>tiendat060709@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Footer

import React from 'react'
import { Blogdata, Paragrap } from '../../../atoms/Atoms'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="fot-data">
                                    <Blogdata content="Information" style="blogdata" />
                                    <ul>
                                        <li><a href="javascript:void(0)">about us</a></li>
                                        <li><a href="javascript:void(0)">Delivery Information</a></li>
                                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                                        <li><a href="javascript:void(0)">Contact Us</a></li>
                                        <li><a href="javascript:void(0)">Returns</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="fot-data">
                                    <Blogdata content="Extras" style="blogdata" />
                                    <ul>
                                        <li><a href="javascript:void(0)">Brands</a></li>
                                        <li><a href="javascript:void(0)">Gift Certificates</a></li>
                                        <li><a href="javascript:void(0)">Affiliate</a></li>
                                        <li><a href="javascript:void(0)">Specials</a></li>
                                        <li><a href="javascript:void(0)">Site Map</a></li>
                                        <li><a href="javascript:void(0)">My Account</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fot-data">
                                    <Blogdata content="Contact Us" style="blogdata" />
                                    <Paragrap content="Address:Your address goes here." style="paragrapp mb-2 pb-1" />
                                    <Paragrap content="Phone: 01234567890" style="paragrapp mb-2 pb-1" />
                                    <Paragrap content="Email: demo@example.com" style="paragrapp mb-2 pb-1" />
                                    <div className="contact-icon d-flex">
                                        <span><i className="fa-brands fa-twitter"></i></span>
                                        <span><i className="fa-brands fa-google-plus-g"></i></span>
                                        <span><i className="fa-brands fa-facebook-f"></i></span>
                                        <span><i className="fa-brands fa-youtube"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="fot-data">
                                    <Blogdata content="Join Our Newsletter Now" style="blogdata" />
                                    <Paragrap content="Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order." style="paragrapp para" />
                                    <div className="insert">
                                        <input type="text" placeholder='Enter your email address' />
                                        <button>Subscribe !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <div className="container">
                    <div className="web-data d-flex justify-content-between">
                        <p>© 2022 Reid Mede With ❤️ By <a href="javascript:void(0)">HasThemes   </a></p>
                        <ul className='d-flex'>
                            <li><a href="javascript:void(0)">Order History</a></li>
                            <li><a href="javascript:void(0)">Wish List</a></li>
                            <li><a href="javascript:void(0)"> Newsletter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

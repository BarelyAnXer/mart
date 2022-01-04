import "./Footer.css"

import logo from "./logo.jpg"

import {FaTwitter, FaFacebook, FaYoutube, FaLinkedinIn, FaInstagram} from "react-icons/fa"

export default function Footer() {
    return (
        <>
            <div>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <img src={logo} alt=""/>
                        <h3>Lorem<span>Ipsum</span></h3>
                        <p className="footer-links">
                            <a href="/">Home</a>|
                            <a href="/">Products</a>|
                            <a href="/">About Us</a>
                        </p>
                        <p className="footer-company-name">© 2021 Group/Company Name here Pvt. Ltd.</p>
                    </div>
                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker"/>
                            <p>
                                <span>GMC Plaza, M. J. Cuenco Ave. Legaspi Ext., Cebu City, 6000 Cebu </span>
                                Lastname Firstname Mi
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-phone"/>
                            <p>09361374885</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"/>
                            <p><a href="/">support@company name</a></p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <div className="footer-icons">
                            <a href="/"><FaFacebook/></a>
                            <a href="/"><FaTwitter/></a>
                            <a href="/"><FaYoutube/></a>
                            <a href="/"><FaLinkedinIn/></a>
                            <a href="/"><FaInstagram/></a>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
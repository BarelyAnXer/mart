import styles from "./Footer.module.css"

import logo from "./logo.jpg"

import {FaTwitter, FaFacebook, FaYoutube, FaLinkedinIn, FaInstagram} from "react-icons/fa"

export default function Footer() {
    return (
        <>
            <div>
                <footer className={styles.footerDistributed}>
                    <div className={styles.footerLeft}>
                        <img src={logo} alt=""/>
                        <h3>Lorem<span>Ipsum</span></h3>
                        <p className={styles.footerLinks}>
                            <a href="/">Home</a>|
                            <a href="/">Products</a>|
                            <a href="/">About Us</a>
                        </p>
                        <p className={styles.footerCompanyName}>© 2021 Group/Company Name here Pvt. Ltd.</p>
                    </div>
                    <div className={styles.footerCenter}>
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
                    <div className={styles.footerRight}>
                        <p className={styles.footerCompanyAbout}>
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <div className={styles.footerIcons}>
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
import {Link} from "react-router-dom";
import {FaFacebookF, FaGooglePlusG, FaTwitter} from "react-icons/fa";
import logo from "../Login/logo.jpg";

export default function Register() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-none d-md-block image-container"/>
                    <div className="col-lg-6 col-md-6 form-container">
                        <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                            <div className="logo mt-5 mb-3">
                                <img src={logo} width="150px" alt=""/>
                            </div>
                            <div className="heading mb-3">
                                <h4>Login into your account</h4>
                            </div>
                            <form>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope"/></span>
                                    <input type="email" placeholder="Email Address" required/>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password" required/>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password" required/>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password" required/>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6 d-flex">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cb1"/>
                                            <label className="custom-control-label text-white" htmlFor="cb1">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/forget" className="forget-link">Forget password</Link>
                                    </div>
                                </div>
                                <div className="text-left mb-3">
                                    <button type="submit" className="btn">Register</button>
                                </div>
                                <div className="text-white mb-3">or Register with</div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <a href className="btn btn-block btn-social btn-facebook">
                                            <FaFacebookF/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href className="btn btn-block btn-social btn-google">
                                            <FaGooglePlusG/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href className="btn btn-block btn-social btn-twitter">
                                            <FaTwitter/>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white">Already have an account?
                                    <Link to="/login" className="register-link">Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
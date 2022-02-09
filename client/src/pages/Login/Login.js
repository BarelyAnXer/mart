import "./Login.css"

import {FaFacebookF, FaGooglePlusG, FaTwitter} from "react-icons/fa";
import {Link, Redirect, useNavigate} from "react-router-dom";

import logo from "./images/logo.jpg"
import {useContext, useState} from "react";
import {UserContext} from "../../UserContext";
import {type} from "@testing-library/user-event/dist/type";

export default function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {user, setUser} = useContext(UserContext);


    const login = (event) => {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {"Content-Type": "application/json"},
        }).then(response => response.json()).then(data => {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem("user")));

            if (data.accType === "Seller") {
                navigate("/crud")
            } else if (data.accType === "Buyer") {
                navigate("/viewProducts");
            }


        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
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
                                    <input type="email" placeholder="Email Address"
                                           onChange={(event) => setEmail(event.target.value)} required/>
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password"
                                           onChange={(event) => setPassword(event.target.value)} required/>
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
                                    <button type="submit" className="btn" onClick={login}>login</button>
                                </div>
                                <div className="text-white mb-3">or login with</div>
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
                                <div className="text-white">Don't have an account?
                                    <Link to="/register" className="register-link">Register here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-none d-md-block image-container"/>
                </div>
            </div>
        </>
    )
};

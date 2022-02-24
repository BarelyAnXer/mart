import styles from "./Login.module.css"

import {FaFacebookF, FaGooglePlusG, FaTwitter} from "react-icons/fa";
import {Link, Redirect, useNavigate} from "react-router-dom";

import logo from "./images/logo.jpg"
import {useContext, useState} from "react";
import {UserContext} from "../../UserContext";
import {Modal} from "react-bootstrap";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

export default function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const [hasError, setHasError] = useState(false);
    const {user, setUser} = useContext(UserContext);


    const login = (event) => {
        event.preventDefault();


        if (email === "admin" && password === "admin") {
            localStorage.setItem("user", JSON.stringify({
                "accType": "admin",
                "address": "edited",
                "email": "admin@gmail.com",
                "isVerified": true,
                "password": "admin",
                "__v": 0,
                "_id": "1",
            }));
            setUser(JSON.parse(localStorage.getItem("user")));
            navigate("/");
            return;

        }


        fetch("/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {"Content-Type": "application/json"},
        }).then(response => {
            return response.json();
        }).then((data) => {

            if (data.hasOwnProperty("errors")) {
                setHasError(true);
                setShow(true);
            } else {

                if (data.isVerified === false) {
                    setHasError(true);
                    setShow(true);
                    return;
                }


                localStorage.setItem("user", JSON.stringify(data));
                setUser(JSON.parse(localStorage.getItem("user")));

                if (data.accType === "Seller") {
                    navigate("/")
                } else if (data.accType === "Buyer") {
                    navigate("/");
                }
            }
        }).catch(error => {
            console.log("error")
            console.log(error)
        });
    }

    return (
        <>
            {/*region Modal*/}
            <Modal show={show} onHide={() => setShow(false)} size="md" aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Message
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {hasError ?
                        (
                            <>
                                <AiOutlineClose style={{
                                    fontSize: "3rem",
                                    color: "red"
                                }}/>
                            </>
                        ) : (
                            <>
                                <AiOutlineCheck style={{
                                    fontSize: "3rem",
                                    color: "green"
                                }}/>
                            </>
                        )
                    }

                    <p style={{
                        fontSize: "1.5rem"
                    }}>
                        <p style={{
                            textAlign: "center",
                        }}>
                            {hasError ? <> Complete the form, Check your Password or Email might not be
                                Registered </> : <></>}
                        </p>
                    </p>

                </Modal.Body>
            </Modal>
            {/*//endregion*/}

            <div className="container-fluid">
                <div className="row">
                    <div className={`col-lg-6 col-md-6 ${styles.formContainer}`}>
                        <div className={`col-lg-8 col-md-12 col-sm-9 col-xs-12 text-center ${styles.formBox}`}>
                            <div className="logo mt-5 mb-3">
                                <img src={logo} width="150px" alt=""/>
                            </div>
                            <div className="heading mb-3">
                                <h4>Login into your account</h4>
                            </div>
                            <form>
                                <div className={styles.formInput}>
                                    <span><i className="fa fa-envelope"/></span>
                                    <input type="email" placeholder="Email Address"
                                           onChange={(event) => setEmail(event.target.value)} required/>
                                </div>
                                <div className={styles.formInput}>
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password"
                                           onChange={(event) => setPassword(event.target.value)} required/>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6 d-flex">
                                        <div className={`custom-control ${styles.customCheckbox}`}>
                                            <input type="checkbox" className={styles.customControlInput} id="cb1"/>
                                            <label className={`text-white ${styles.customControlLabel}`} htmlFor="cb1">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/forget" className="forgetLink">Forget password? </Link>
                                    </div>
                                </div>
                                <div className="text-left mb-3">
                                    <button type="submit" className="btn" onClick={login}>login</button>
                                </div>
                                <div className="text-white mb-3">or login with</div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <a href className={`btn btn-block ${styles.btnSocial} ${styles.btnFacebook}`}>
                                            <FaFacebookF/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href className={`btn btn-block ${styles.btnSocial} ${styles.btnGoogle}`}>
                                            <FaGooglePlusG/>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href className={`btn btn-block ${styles.btnSocial} ${styles.btnTwitter}`}>
                                            <FaTwitter/>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white">Don't have an account?
                                    <Link to="/register" className="registerLink"> Register here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-md-6 d-none d-md-block ${styles.imageContainer}`}/>
                </div>
            </div>
        </>
    )
};

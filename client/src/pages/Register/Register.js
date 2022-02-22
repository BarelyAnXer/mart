import "./Register.css"
import {Link} from "react-router-dom";
import {FaFacebookF, FaGooglePlusG, FaTwitter} from "react-icons/fa";
import logo from "../Login/images/logo.jpg";
import {useState} from "react";
import CustomModal from "../../Components/CustomModal";
import {Modal} from "react-bootstrap";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [accType, setAccType] = useState("Buyer");

    const [show, setShow] = useState(false);
    const [hasError, setHasError] = useState(false);

    const register = (event) => {
        event.preventDefault();

        if (email === "" || password === "" || address === "") {
            setHasError(true);
            setShow(true);
            return;
        }

        fetch("/signup", {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                "address": address,
                "accType": accType
            }),
            headers: {"Content-Type": "application/json"},
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.hasOwnProperty("errors")) {
                setHasError(true);
                setShow(true);
            } else {
                setHasError(false);
                setShow(true);
            }
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <>

            <Modal show={show} onHide={() => setShow(false)} size="md"
                   aria-labelledby="contained-modal-title-vcenter"
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
                        {hasError ?
                            (
                                <>
                                    Please Complete the form
                                </>
                            ) : (
                                <>
                                    SuccessFully Created
                                </>
                            )
                        }
                    </p>
                </Modal.Body>
            </Modal>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-none d-md-block imageContainer"/>
                    <div className="col-lg-6 col-md-6 formContainer">
                        <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 formBox text-center">
                            <div className="logo mt-5 mb-3">
                                <img src={logo} width="150px" alt=""/>
                            </div>
                            <div className="heading mb-3">
                                <h4>Login into your account</h4>
                            </div>
                            <form>
                                <div className="formInput">
                                    <span><i className="fa fa-envelope"/></span>
                                    <input type="email" placeholder="Email Address"
                                           onChange={(event) => setEmail(event.target.value)} required/>
                                </div>
                                <div className="formInput">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="password" placeholder="Password"
                                           onChange={(event) => setPassword(event.target.value)} required/>
                                </div>

                                <div className="formInput">
                                    <span><i className="fa fa-lock"/></span>
                                    <input type="text" placeholder="Address"
                                           onChange={(event) => setAddress(event.target.value)} required/>
                                </div>

                                <div className="formInput">
                                    <select className="form-select" aria-label="Default select example" value={accType}
                                            onChange={event => setAccType(event.target.value)}>
                                        <option value="Buyer">Buyer</option>
                                        <option value="Seller">Seller</option>
                                    </select>
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
                                        <Link to="/forget" className="forgetLink">Forget password</Link>
                                    </div>
                                </div>
                                <div className="text-left mb-3">
                                    <button type="submit" className="btn" onClick={register}>Register</button>
                                </div>
                                {/*<div className="text-white mb-3">or Register with</div>*/}
                                {/*<div className="row mb-3">*/}
                                {/*    <div className="col-4">*/}
                                {/*        <a href className="btn btn-block btn-social btn-facebook">*/}
                                {/*            <FaFacebookF style={{*/}
                                {/*                background: "#4866a8",*/}
                                {/*            }}/>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-4">*/}
                                {/*        <a href className="btn btn-block btn-social btn-google">*/}
                                {/*            <FaGooglePlusG/>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-4">*/}
                                {/*        <a href className="btn btn-block btn-social btn-twitter">*/}
                                {/*            <FaTwitter/>*/}
                                {/*        </a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="text-white">Already have an account?
                                    <Link to="/login" className="registerLink">Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
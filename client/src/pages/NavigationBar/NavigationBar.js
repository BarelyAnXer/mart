import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../UserContext";

import {CgProfile} from "react-icons/cg"
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

export default function NavigationBar() {

    const {user, setUser} = useContext(UserContext);
    const [show, setShow] = useState(false);

    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const [temp, setTemp] = useState(false);

    const renderSellerBuyerMenu = () => {
        if (user === null) {
            return (
                <></>
            )
        } else {
            if (user.accType === "Buyer") {
                return (
                    <>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/receive">To Receive</Nav.Link>
                    </>
                )
            } else if (user.accType === "Seller") {
                return (
                    <>
                        <Nav.Link href="/crud">Dashboard</Nav.Link>
                        <Nav.Link href="/ship">Orders</Nav.Link>
                        <Nav.Link href="/sellerHistory">History</Nav.Link>
                    </>
                );
            } else if (user.accType === "admin") {
                return (
                    <>
                        <Nav.Link href="/admin">Dashboard</Nav.Link>
                        <Nav.Link href="/AdminHistory">History</Nav.Link>
                    </>
                );
            }
        }
    }

    const profile = (event) => {
        event.preventDefault();
        setShow(true);
    }

    const renderLoginRegisterNav = () => {

        if (user === null) {
            return (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/register">
                        Register
                    </Nav.Link>
                </>
            )
        }

        if (user.accType === "admin") {
            return (
                <>
                    <Nav.Link href="/login">ADMIN</Nav.Link>
                    <Nav.Link href="/login" onClick={() => {
                        localStorage.removeItem("user");
                    }}>Logout</Nav.Link>
                </>
            )
        } else if (user) {
            return (
                <>
                    <Nav.Link onClick={profile} style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                    }}>
                        {user.email}
                        <CgProfile style={{
                            fontSize: "1.5rem",
                        }}/>
                    </Nav.Link>
                    <Nav.Link href="/login" onClick={() => {
                        localStorage.removeItem("user");
                    }}>Logout</Nav.Link>
                    {/*<Nav.Link onClick={profile}>*/}

                    {/*</Nav.Link>*/}

                </>
            )
        }

    }


    return (
        <>

            <Modal show={temp} onHide={() => setTemp(false)} size="md" aria-labelledby="contained-modal-title-vcenter"
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

                    <AiOutlineCheck style={{
                        fontSize: "3rem",
                        color: "green"
                    }}/>

                    <p style={{
                        fontSize: "1.5rem"
                    }}>
                        <p style={{
                            textAlign: "center",
                        }}>
                            Success
                        </p>
                    </p>


                </Modal.Body>
            </Modal>


            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(event => setPassword(event.target.value))}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address"
                                          onChange={(event => setAddress(event.target.value))}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number"
                                          onChange={(event => setPhoneNumber(event.target.value))}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(event) => {
                            event.preventDefault();

                            const user = JSON.parse(localStorage.getItem("user"));
                            const uid = user._id;

                            fetch("/updateProfile", {
                                method: "POST",
                                body: JSON.stringify({
                                    "password": password,
                                    "address": address,
                                    "phoneNumber": phoneNumber,
                                    "userID": uid,
                                }),
                                headers: {"Content-Type": "application/json"},
                            }).then(response => response.json()).then(data => {

                                setTemp(true);

                            }).catch(error => {
                                console.log(error)
                            });

                            setShow(false);


                        }}>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TUBEMART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/viewProducts">View Products</Nav.Link>
                            <Nav.Link href="/aboutUs">Abouts Us</Nav.Link>


                            {renderSellerBuyerMenu()}
                            {/*<Nav.Link href="/crud">Crud</Nav.Link>*/}
                            {/*<Nav.Link href="/cart">Cart</Nav.Link>*/}

                            {/*<Nav.Link href="/receive">To Receive</Nav.Link>*/}
                            {/*<Nav.Link href="/ship">To Ship</Nav.Link>*/}


                        </Nav>
                        <Nav>


                            {renderLoginRegisterNav()}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
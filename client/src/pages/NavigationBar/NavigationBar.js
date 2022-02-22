import {Container, Nav, Navbar} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../UserContext";

export default function NavigationBar() {

    const {user, setUser} = useContext(UserContext);

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
                    <Nav.Link href="/login">{user.email}</Nav.Link>
                    <Nav.Link href="/login" onClick={() => {
                        localStorage.removeItem("user");
                    }}>Logout</Nav.Link>
                </>
            )
        }

    }


    return (
        <>
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
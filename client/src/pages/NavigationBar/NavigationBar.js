import {Container, Nav, Navbar} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../UserContext";

export default function NavigationBar() {

    const {user, setUser} = useContext(UserContext);

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
                            <Nav.Link href="/crud">Crud</Nav.Link>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Nav>
                            {
                                user ? (
                                    <>
                                        <Nav.Link href="/login">{user.email}</Nav.Link>
                                        <Nav.Link href="/login" onClick={() => {
                                            localStorage.removeItem("user");
                                        }}>Logout</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link eventKey={2} href="/register">
                                            Register
                                        </Nav.Link>
                                    </>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
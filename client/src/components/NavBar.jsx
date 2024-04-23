import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img alt="" className="nav-logo" src={logo}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg" variant="light" fluid>
            <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: '#202020' }}>Active Cyber Defense as a Service</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/modelList" style={{ textDecoration: 'none', color: '#2f2f2f' }}>Model List</Link></Nav.Link>
                    <Nav.Link><Link to="/selectedModel" style={{ textDecoration: 'none', color: '#2f2f2f' }}>Selected Model</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavbarComp() {
    return (
        <div className='navbar'>
            {/* <div className='navbar-logo'>
                Cloud Computing
            </div>
            <ul className='navbar-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/modelList">Model List</Link></li>
                <li><Link to="/selectedModel">Selected Model</Link></li>
            </ul> */}

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            <Link to="/modelList" class="nav-link">Model List</Link>
                            <Link to="/selectedModel" class="nav-link">Selected Model</Link>
                        </div>
                    </div>
                </div>
            </nav> */}

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
        </div>
    )
}

export default NavbarComp
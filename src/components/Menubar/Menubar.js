import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../Menubar/Menubar.css';

const Menubar = ({ count }) => {
    return (
        <div>
            {/* <div className="container my-4">
                <div className="row">
                    <div className="col-md-3 logo-container d-flex justify-content-start">
                        <a href="#"><h3>Faija Akther Faiju</h3></a>
                    </div>
                    <div className="col-md-9 menu-container d-flex justify-content-end">
                        <li><a className='list-item me-5' href="#">HOME</a></li>
                        <li><a className='list-item me-5' href="#">CART <sup className='cart-count'>{count}</sup></a></li>
                        <li><a className='list-item me-5' href="#">SHOP</a></li>
                        <li><a className='list-item' href="#">LOGIN</a></li>
                    </div>
                </div>
            </div> */}




            <Navbar bg="light" expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand href="http://localhost:3000/" className='fs-3' style={{ color: 'rgb(80, 80, 80)' }}>Faija Akther Faiju</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link className='fs-5 mx-4' href="#">HOME</Nav.Link>
                            <Nav.Link className='fs-5 mx-4' href="#">CART <sup className='cart-count'>{count}</sup></Nav.Link>
                            <Nav.Link className='fs-5 mx-4' href="#">SHOP</Nav.Link>
                            <Nav.Link className='fs-5 ' href="#">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar; <h2>FAKE-STORE</h2>
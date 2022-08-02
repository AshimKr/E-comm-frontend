import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        // className="navbar navbar-dark "
        expand="lg"
      >
        <Container>
          <Link to='/' style={{ textDecoration: 'none', color:'#fff' }}>
            <h3>ProShop</h3>
            </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='/cart' style={{ textDecoration: 'none', color:'wheat' }} className='my-auto px-2'><i className="fa-solid fa-cart-shopping px-0"></i> Cart</Link>
              <Link to='/singup' style={{ textDecoration: 'none', color:'wheat' }} className='my-auto px-2'><i className="fa-solid fa-user px-1"></i>Sign Up</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

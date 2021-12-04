import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "gatsby";
import { FaDumbbell } from "react-icons/fa"



const NavBar = () => {

    return(
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
          <FaDumbbell />
          </Link>       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link>
              <Link to='/' className="gatsby-link" >CHARTE</Link>
            </Nav.Link> */}
            <NavDropdown title="MENU" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to='/cardio' className="gatsby-link" >cardio</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/muscu' className="gatsby-link" >muscu</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/stats' className="gatsby-link" >Stats</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/compte' className="gatsby-link" >COMPTE</Link>
            </Nav.Link>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
};

export default NavBar;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-StarWars.png'
import './CSS/NavbarApp.css';


function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand ><img class="logo" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link classname="ItemN" href='/'>HOME</Nav.Link>
            <Nav.Link classname="ItemN" href='/Personajes'>PERSONAJES</Nav.Link>
            <Nav.Link classname="ItemN" href='/Planetas'>PLANETAS</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Star........."
              className="me-2"
              aria-label="BUSCAR"
            />
            <Button variant="outline-warning">BUSCAR</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
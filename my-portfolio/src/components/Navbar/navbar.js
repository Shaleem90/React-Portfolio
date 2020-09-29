
import React from "react";
import { Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap';
//import { Link } from "react-router-dom";

const NavbarApp = () => {
    return (

        <container>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
  </container>
    );
  }
  
  export default NavbarApp;
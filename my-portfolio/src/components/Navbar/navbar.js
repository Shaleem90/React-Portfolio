
import React from "react";
import { Nav, Navbar} from 'react-bootstrap';


const NavbarApp = () => {
    return (

        <container>

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><img style={{ height: '5rem' }} src='Group 38.png'></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="About">About Me</Nav.Link>
      <Nav.Link href="Projects">Projects</Nav.Link>
      <Nav.Link href="Contact">Contact</Nav.Link>
      <Nav.Link href="Shaleem_Malik_Resume (1).PDF">Download Resume</Nav.Link>

    </Nav>
  </Navbar>

  
  </container>
    );
  }
  
  export default NavbarApp;
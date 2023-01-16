import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="top">
      
        <NavbarBrand href="/" 
            style={{
            marginTop: '10px',
            marginLeft: '10px',
            fontSize: '30px',
            marginRight: '10px'}}>
            <h1 className='brand'>Gigi DeBortoli</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} >
        <Nav className='end' pills>
            <NavItem>
              <NavLink href="/About">
                <h2>About Me</h2>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="./Projects">
                <h2>Projects</h2>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Resume">
               <h2>Resume</h2>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Contact">
                <h2>Contact</h2>
              </NavLink>
            </NavItem>
        
          </Nav>
          </Collapse>
         
      </Navbar>
     
    </div>
  );
}

export default Header;

// {/* <Nav className="container fixed-auto" navbar>
// <Row xs="5">
//   <NavItem className=''>
//   <Col className=''>
//   <h2>About Me</h2>
//   </Col>
//   {/* <NavLink href="/components/">About Me</NavLink> */}
//   </NavItem>
//   {/* Resume */}
//   <NavItem>
//   <Col className=''>
//   <h2>Resume</h2>
//   </Col>
//   </NavItem>
//   {/* Projects */}
//   <NavItem className=''>
//   <Col className=''>
//   <h2>Projects</h2>
//   </Col>
//   </NavItem>
//   {/* Contact Form */}
//   <NavItem>
//   <Col className=''>
//   <h2>Contact</h2>
//   </Col>
//   </NavItem>
// </Row>
// </Nav> */}
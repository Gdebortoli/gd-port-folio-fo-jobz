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
// import Contact from '../Contact';
import Navigate from '../Navigate';
// import Projects from '../Projects';
// import About from '../About';
// import Resume from '../Resume';



function Header() {

const [collapsed, setCollapsed] = useState(false);
const toggleNavbar = () => setCollapsed(!collapsed);

const pageSelections = ['About', 'Projects', 'Contact', 'Resume']

const [currentPageSelected, setCurrentPageSelected] = useState(pageSelections[0]);

  

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
              <NavLink >
              <span role="button" onClick={() => setCurrentPageSelected(pageSelections[0])} className={`nav-link ${currentPageSelected === pageSelections[0] && 'active'}`}>
                About Me</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
                <span role="button" onClick={() => setCurrentPageSelected(pageSelections[1])} className={`nav-link ${currentPageSelected === pageSelections[1] && 'active'}`}>
                Projects</span>
                
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
              <span role="button" onClick={() => setCurrentPageSelected(pageSelections[0])} className={`nav-link ${currentPageSelected === pageSelections[2] && 'active'}`}>
                Resume</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
              <span role="button" onClick={() => setCurrentPageSelected(pageSelections[0])} className={`nav-link ${currentPageSelected === pageSelections[3] && 'active'}`}>
                Contact</span>
              </NavLink>
            </NavItem>
        
          </Nav>
          </Collapse>
         
      </Navbar>
     <Navigate currentPageSelected={currentPageSelected}/>
    </div>
  );
}

export default Header;


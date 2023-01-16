import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
// } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

// const Navigate = () => {

//   const [collapsed, setCollapsed] = useState(false);
//   const toggleNavbar = () => setCollapsed(!collapsed);
//   const navLinkStyles = ({ isActive }) => {
//     return {
//         fontWeight: isActive ? 'bold' : 'normal',
//         textDecoration: isActive ? 'none' : 'underline',
//     }
// }
  
//   return (
//     <div>
//       <Navbar className="top">
      
//         <NavbarBrand href="/" 
//             style={{
//             marginTop: '10px',
//             marginLeft: '10px',
//             fontSize: '30px',
//             marginRight: '10px'}}>
//             <h1 className='brand'>Gigi DeBortoli</h1>
//         </NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="me-2" />
//         <Collapse isOpen={!collapsed} >
//         <Nav className='end' pills>
//             <NavItem>
//               <NavLink style={navLinkStyles} to='/'>
//                 About Me
//               </NavLink>
//             </NavItem>

//             <NavItem>
//               <NavLink style={navLinkStyles} to='/Projects'>
//                 Projects
//               </NavLink>
//             </NavItem>

//             <NavItem>
//               <NavLink style={navLinkStyles} to='/Resume'>
//                 Resume
//               </NavLink>
//             </NavItem>

//             <NavItem>
//               <NavLink style={navLinkStyles} to='/Contact'>
//                 Contact 
//               </NavLink>
//             </NavItem>
        
//           </Nav>
//           </Collapse>
         
//       </Navbar>
//     </div>
//   )
// }

// export default Navigate; 


// // Makes the navbar take the links to the correct pages

function Navigate(props) {
    let { currentPage } = props;

    if (currentPage === 'about') {
        return (
            <About />
        )
    } else if (currentPage === 'projects') {
        return (
            <Projects />
        )
    } else if (currentPage === 'resume') {
        return (
            <Resume />
        )
    } else if (currentPage === 'contact') {
        return (
            <Contact />
        )
    }
}

export default Navigate; 
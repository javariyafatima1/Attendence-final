import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div>
<Navbar expand="lg" variant="dark" className="navbar-custom">
   <Container> 
   {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
      <Navbar.Brand  href="/"><img src={image} style={{height:50,width:70}}/>
      </Navbar.Brand>
     <Navbar.Brand href="/">AttendenceApp </Navbar.Brand>
     <Navbar.Toggle aria-controls="navbar-nav" />
     <Navbar.Collapse id="navbar-nav">
       <Nav className=" fs-5">
         <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
         <Nav.Link><Link to="/addattendence" className="nav-link"> Add Attendence</Link></Nav.Link>
         <Nav.Link><Link to="/signup" className="nav-link">Signup</Link></Nav.Link>
         <Nav.Link><Link to="/login" className="nav-link">Login</Link></Nav.Link>
         <Nav.Link><Link to="/dashboard" className="nav-link">Dashboard</Link></Nav.Link>
          </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
    
    </div>
  );
}

export default Header;

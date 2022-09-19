import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoS from '../../../assets/logo/skilldizerLogo.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand href="/"><img src={logoS} alt={''} height='80px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link><Link to='signup' style={{textDecoration:'none', color:'gray'}}>Become a Tutor</Link></Nav.Link>

            <NavDropdown title="Find Tutors" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Arabic </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link>
                <Link to='login'>
                    <Button variant="dark" size="lg">
                {/* <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-Login-interface-those-icons-fill-those-icons.png"/>  */}Login
                </Button>
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


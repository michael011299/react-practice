import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Test Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Nothing ... yet</Nav.Link>
            <Nav.Link href="#pricing">Also nothing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
)

export default Header
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function FeltNav() {
  return (
    <Navbar expand="lg">
      <Container className="felt-nav-container">
        <Navbar.Brand href="#home" className="brand">
          <h1>SMF Times</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto felt-nav-link">
            <Nav.Link>
              <i class="fa-solid fa-magnifying-glass"></i>
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FeltNav;

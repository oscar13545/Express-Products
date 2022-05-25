import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

export default function MegaNavbar() {
  return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Express Products</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      
      <Nav.Link href="/Cobros">Cobro</Nav.Link>
      
      <Nav.Link href="/Productos">Producto</Nav.Link>
      <Nav.Link href="/Clientes">Cliente</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

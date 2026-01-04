import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BasicExample() {
  const cards = useSelector(state => state.cards);
  // console.log(cards);
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to={'/'}>React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Products</Link>
            <Link className='nav-link' to={'/card'}>Card -{cards.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
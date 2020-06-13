import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router';
const AppBar = (props) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Navbar bg='danger' variant='dark' expand='lg'>
      <Navbar.Brand>COMEDOR OXXO</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link href='/'>
            <a
              className={
                router.pathname == '/'
                  ? 'linked-item linked-active'
                  : 'linked-item'
              }
            >
              Horarios
            </a>
          </Link>

          <Link href='/CargarArchivo'>
            <a
              className={
                router.pathname == '/CargarArchivo'
                  ? 'linked-item linked-active'
                  : 'linked-item'
              }
            >
              Cargar Archivo{' '}
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppBar;

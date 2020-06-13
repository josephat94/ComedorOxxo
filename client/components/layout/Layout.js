import Head from 'next/head';

import AppBar from '../navbar/Navbar';
import Container from 'react-bootstrap/Container';

import { ToastContainer } from 'react-toastify';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossOrigin='anonymous'
        />
      </Head>

      <AppBar></AppBar>
      <br></br>
      <Container fluid={'sm'}>{children}</Container>
      <ToastContainer />
    </>
  );
};

export default Layout;

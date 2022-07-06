import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";

const Appbar = styled(Navbar)`
  a {
    color: white !important;
    font-family: "GmarketSans" !important;
    text-decoration: none;
    padding: 8px 20px;
  }
`;

const Layout = (props) => {
  return (
    <>
      <Appbar fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/page1'>Page1</Link>
              <Link href='/page2'>Page2</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Appbar>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

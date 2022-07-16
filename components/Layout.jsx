import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";
import { changePage } from "../reducers/globalReducer";

const Appbar = styled(Navbar)`
  z-index: 9999;
  width: 100%;

  a {
    color: white !important;
    font-family: "GmarketSans";
    font-size: 28px;
  }
`;

const Space = styled.div`
  flex-grow: 1;
`;

const Menu = styled(Nav.Link)`
  margin: auto 12px;
  padding: 8px 20px !important;
  border-radius: 16px;

  &.active {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    color: rgba(0, 0, 0, 0.7) !important;
  }
`;

const Layout = (props) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.global);

  return (
    <div className="position-relative">
      <Appbar className="position-fixed top-0 start-0" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Elice</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Space />
            <Nav className="me-auto">
              <Menu
                href="#page1"
                active={globalState.currentPage == 1}
                onClick={() => {
                  dispatch(changePage(1));
                }}
              >
                Page1
              </Menu>
              <Menu
                href="#page2"
                active={globalState.currentPage == 2}
                onClick={() => {
                  dispatch(changePage(2));
                }}
              >
                Page2
              </Menu>
              <Menu
                href="#page3"
                active={globalState.currentPage == 3}
                onClick={() => {
                  dispatch(changePage(3));
                }}
              >
                Page3
              </Menu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Appbar>
      <main className="position-absolute top-0 start-0">{props.children}</main>
    </div>
  );
};

export default Layout;

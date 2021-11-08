import React from "react";
import ecopedal_logo from "../../img/header/ecopedal_logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={ecopedal_logo}
            className="d-inline-block align-top"
            alt="ecopedal"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link href="/watersave">СКОЛЬКО ЭКОНОМИТ</Nav.Link>
            <Nav.Link href="/parts">КОМПЛЕКТУЮЩИЕ</Nav.Link>
            <Nav.Link href="/reviews">ОТЗЫВЫ</Nav.Link>
            <Nav.Link href="/help">ВОПРОСЫ</Nav.Link>
            <Nav.Link href="/contacts">КОНТАКТЫ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;

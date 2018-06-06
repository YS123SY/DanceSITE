import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  ButtonToolbar,
  Dropdown,
  Button
} from "react-bootstrap";

import "../styles/Navbar.css";

class Allo extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <div
              className="logo"
              style={{
                backgroundImage: `url("http://static9.cdn.ubisoft.com/resource/fr-CA/game/justdance/jd-portal/landing-logo_215825.jpg")`
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/">
                <Button bsStyle="info">Accueil</Button>
              </Link>
            </NavItem>

            <NavItem eventKey={2}>
              <Link to="/Dancers">
                <Button bsStyle="info">Dancers</Button>
              </Link>
            </NavItem>

            <NavItem eventKey={3}>
              <Link to="/annonces">
                <Button bsStyle="info">Annonces</Button>
              </Link>
            </NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={2}>
              <Link to="/connection">
                <Button bsStyle="info">Connection</Button>
              </Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/inscription">
                <Button bsStyle="info">Inscription</Button>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Allo;

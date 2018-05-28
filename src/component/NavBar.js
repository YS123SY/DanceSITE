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
              <ButtonToolbar>
                <Dropdown id="dropdown-custom-2">
                  <Button bsStyle="info">Dancer</Button>
                  <Dropdown.Toggle bsStyle="success" />
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1">Homme</MenuItem>
                    <MenuItem eventKey="2">Femme</MenuItem>
                    <MenuItem eventKey="3">Groupe</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </NavItem>

            <NavItem eventKey={2}>
              <ButtonToolbar>
                <Dropdown id="dropdown-custom-2">
                  <Button bsStyle="info">Age</Button>
                  <Dropdown.Toggle bsStyle="success" />
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1">20</MenuItem>
                    <MenuItem eventKey="2">30</MenuItem>
                    <MenuItem eventKey="3">And So on </MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </NavItem>

            <NavItem eventKey={3}>
              <ButtonToolbar>
                <Dropdown id="dropdown-custom-2">
                  <Button bsStyle="info">Place</Button>
                  <Dropdown.Toggle bsStyle="success" />
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1">Nord Tunisie</MenuItem>
                    <MenuItem eventKey="2">Sud Tunisie</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1}>
              <img
                style={{
                  backgroundImage: `url(
              "https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg"
            )`,
                  border: " 6px raduis"
                }}
              />
            </NavItem>
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

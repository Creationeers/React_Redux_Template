import "bootstrap/dist/css/bootstrap.min.css";

import { Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import header_logo from "./header_logo.png";
import { withRouter } from "react-router-dom";

function NavBar({ ...props }) {
  const [expanded, setExpanded] = useState(false);
  const activeStyle = {
    color: "#6AB9DB"
  };
  const imgStyle = {
    marginBottom: 5
  };
  const btnStyle = {
    marginLeft: 5,
    color: "#6AB9DB",
    borderColor: "#6AB9DB"
  };
  const navBarStyle = {
    marginBottom: 10
  };

  return (
    <Navbar
      style={navBarStyle}
      expanded={expanded}
      expand="lg"
      variant="light"
      bg="light"
      sticky="top"
    >
      <NavLink to="/">
        <Navbar.Brand>
          <img
            style={imgStyle}
            src={header_logo}
            alt="Creationeers Logo"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="nav-item nav-link"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="nav-item nav-link"
            to="/dummy"
          >
            Second Link
          </NavLink>
        </Nav>
        <Nav className="ml-auto"></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(NavBar);

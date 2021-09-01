import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

import styles from "./AuthNav.module.css";

const AUTH_NAV_TITLES = [
  { id: "t3", title: "Sign in", url: "/login" },
  { id: "t4", title: "Join us", url: "/register" },
];

export default function AuthNav() {
  return (
    <Nav className={styles.authNav}>
      {AUTH_NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          <Nav.Item key={id} className={styles.authNavItem}>
            <NavLink exact eventKey={id} to={url}>
              <Button variant="outline-primary">{title}</Button>{" "}
            </NavLink>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

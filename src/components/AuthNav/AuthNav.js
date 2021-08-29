import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./AuthNav.module.css";

const AUTH_NAV_TITLES = [
  { id: "t3", title: "Sign in", url: "/login" },
  { id: "t4", title: "Join us", url: "/register" },
];

export default function AuthNav() {
  return (
    <Nav className={styles.nav_container}>
      {AUTH_NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          <Nav.Link exact eventKey={id} key={id} href={url}>
            {title}
          </Nav.Link>
        );
      })}
    </Nav>
  );
}

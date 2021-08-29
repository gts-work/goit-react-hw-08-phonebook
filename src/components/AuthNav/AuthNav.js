import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AUTH_NAV_TITLES = [
  { id: "t3", title: "Sign in", url: "/login" },
  { id: "t4", title: "Join us", url: "/register" },
];

export default function AuthNav() {
  return (
    <ul className={styles.nav_container}>
      {AUTH_NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          <li key={id}>
            <NavLink
              exact
              to={url}
              className={styles.nav_link}
              activeClassName={styles.nav_link_active}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

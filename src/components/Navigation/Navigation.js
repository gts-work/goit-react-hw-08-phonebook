import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { Nav } from "react-bootstrap";
import styles from "./Navigation.module.css";

const NAV_TITLES = [{ id: "t2", title: "Phonebook", url: "/contacts" }];

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav className={"me-auto"}>
      {NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          isLoggedIn && (
            <NavLink key={id} exact to={url} className={styles.navLink}>
              {title}
            </NavLink>
          )
        );
      })}
    </Nav>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { authSelectors } from "../../redux/auth";
import { Nav } from "react-bootstrap";

const NAV_TITLES = [{ id: "t2", title: "Phonebook", url: "/contacts" }];

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav className={"me-auto"}>
      {NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          isLoggedIn && (
            <Nav.Link eventKey={id} href={url}>
              {title}
            </Nav.Link>
          )
        );
      })}
    </Nav>
  );
}

import React from "react";
import { Nav, Button } from "react-bootstrap";

const AUTH_NAV_TITLES = [
  { id: "t3", title: "Sign in", url: "/login" },
  { id: "t4", title: "Join us", url: "/register" },
];

export default function AuthNav() {
  return (
    <Nav className="justify-content-end">
      {AUTH_NAV_TITLES.map((nav) => {
        const { id, url, title } = nav;

        return (
          <Nav.Item>
            <Nav.Link exact eventKey={id} key={id} href={url}>
              <Button variant="outline-primary">{title}</Button>{" "}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

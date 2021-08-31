import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Nav } from "react-bootstrap";

import { authSelectors } from "redux/auth";

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);

  console.log("HomeView ~ isLoggedIn ++> ", isLoggedIn);

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Hello, {isLoggedIn ? userName : "Guest"}</Card.Title>
        <Card.Text>
          {isLoggedIn
            ? "You can continue to add and save your contacts"
            : "You must log in or register to start adding or saving your contacts"}
        </Card.Text>
        <Nav.Link exact eventKey="contacts" href="/contacts">
          <Button variant="outline-primary">Go to you phonebook</Button>{" "}
        </Nav.Link>
      </Card.Body>
    </Card>
  );
};

export default HomeView;

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
        {isLoggedIn ? (
          <NavLink exact key="contacts" to="/contacts">
            <Button variant="outline-primary">Go to you phonebook</Button>{" "}
          </NavLink>
        ) : (
          <NavLink exact key="register" to="/register">
            <Button variant="outline-primary">To registration</Button>{" "}
          </NavLink>
        )}
      </Card.Body>
    </Card>
  );
};

export default HomeView;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { authOperations, authSelectors } from "../redux/auth";

import ModalError from "../components/ModalError";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    console.log("handleChange ~ name ===>> ", name);
    console.log("handleChange ~ value ===>> ", value);

    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const loginErrors = useSelector(authSelectors.getLoginErrors);
  console.log("LoginView ~ loginErrors  ==>> ", loginErrors);

  return (
    <>
      {loginErrors && <ModalError msg={"Incorrect login or password"} />}
      <h1>Login</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

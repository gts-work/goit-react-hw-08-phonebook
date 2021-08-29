import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { authOperations } from "../redux/auth";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1>Registration</h1>

        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Alex Bro"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="name@example.com"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
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
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

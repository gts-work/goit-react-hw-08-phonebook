import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";

import { contactsOperations } from "redux/contacts";
import styles from "./ContactForm.module.css";

const shortid = require("shortid");

function ContactForm({ onSubmit, onHide }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);

  const handleChange = (e) => {
    // console.log("Form ~ e: ", e.currentTarget);
    const { name, value, id } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
    }

    setId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, name, number });
    reset();
  };

  const reset = () => {
    setId("");
    setName("");
    setNumber("");
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Alex Bro"
            required
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formPlaintextPhoneNumber"
      >
        <Form.Label column sm="2">
          Number
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="+44 0207 887 2666"
            required
          />
        </Col>
      </Form.Group>

      <Button
        variant="primary"
        className={styles.btn_submit}
        type="submit"
        onClick={onHide}
      >
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.defaultTypes = {
  onSubmit: () => {},
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsOperations.fetchAddContacts(text)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { contactsOperations } from "redux/contacts";
import styles from "./ContactForm.module.css";

const shortid = require("shortid");

function ContactForm({ onSubmit }) {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form_label} htmlFor={nameInputId}>
        <span className={styles.label_name}>Name</span>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.form_label} htmlFor={numberInputId}>
        <span className={styles.label_name}>Number</span>
        <input
          className={styles.form_input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={styles.add_contact_btn} type="submit">
        Add contact
      </button>
    </form>
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

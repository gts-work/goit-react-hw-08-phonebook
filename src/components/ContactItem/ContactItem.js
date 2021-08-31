import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import { contactsOperations } from "redux/contacts";

const ContactItem = ({ id, name, number, onDelete }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{number}</td>
    <td>
      <Button variant="outline-danger" value={id} onClick={() => onDelete(id)}>
        Delete
      </Button>
    </td>
  </tr>
);

ContactItem.defaultProps = {
  onDelete: () => {},
  id: "",
  name: "",
  number: 0,
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDelete: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactId) =>
    dispatch(contactsOperations.fetchDeleteContacts(contactId)),
});

export default connect(null, mapDispatchToProps)(ContactItem);

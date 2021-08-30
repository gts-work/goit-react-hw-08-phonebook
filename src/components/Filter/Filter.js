import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { contactsAction } from "redux/contacts";
import { сontactsSelectors } from "redux/contacts";

const Fiter = ({ value, onChange }) => (
  <InputGroup className="mb-3">
    <InputGroup.Text id="find-contacts-by-name">
      <FontAwesomeIcon icon={faSearch} />
    </InputGroup.Text>
    <FormControl
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
      aria-label="Find contacts by name"
      aria-describedby="find-contacts-by-name"
    />
  </InputGroup>
);

Fiter.defaultProps = {
  value: "",
  onChange: () => {},
};

Fiter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: сontactsSelectors.getContactsFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fiter);

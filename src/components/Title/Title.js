import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => <h2>{title}</h2>;

Title.defaultProps = {
  title: "Phonebook",
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;

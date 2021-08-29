import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

// Container.defaultTypes = {
//     children: null,
// };

// Container.propTypes = {
//     onSubmit: PropTypes.func,
// };

export default Container;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { contactsOperations } from "redux/contacts";
import { сontactsSelectors } from "redux/contacts";
import ContactItem from "./ContactItem";

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector((state) => {
    console.log("ContactsList ~ state: ", state);
    сontactsSelectors.getVisibleContacts(state);
  });

  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <div>
      <h3>Contacts</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <ContactItem id={id} name={name} number={number} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactsList.defaultProps = {
  onDelete: () => {},
  contacts: PropTypes.shape({
    id: "",
    name: "",
    number: 0,
  }),
};

ContactsList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }),
  onDelete: PropTypes.func,
};

export default ContactsList;

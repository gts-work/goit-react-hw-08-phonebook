import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { contactsOperations } from "redux/contacts";
import { сontactsSelectors } from "redux/contacts";
import ContactItem from "./ContactItem";

// const dispatch = useDispatch();
// const isLoadingTodos = useSelector(todosSelectors.getLoading);

// const [isModalOpen, setIsModalOpen] = useState(false);
// const toggleModal = () => setIsModalOpen((state) => !state);

// useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => {
    console.log("ContactsList ~ state: ", state);
    return сontactsSelectors.getVisibleContacts(state);
  });

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  console.log("ContactsList ~ contacts: ", contacts);

  return (
    <>
      <h3>Contacts</h3>
      <Table striped bordered hover>
        <tr>
          <th>User</th>
          <th>Pfone number</th>
          <th>Action</th>
        </tr>
        <tbody>
          {contacts.map(({ id, name, number }) => (
            <ContactItem id={id} name={name} number={number} />
          ))}
        </tbody>
      </Table>
    </>
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

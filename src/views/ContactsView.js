import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Title from "components/Title";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";
import ModalContacts from "components/ModalContacts";

const ContactsView = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Title title="Phonebook" />
      <ModalContacts show={modalShow} onHide={() => setModalShow(false)} />
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Contact
      </Button>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsView;

import React from "react";
import { Modal } from "react-bootstrap";

import ContactForm from "../ContactForm";

function ModalContacts(props) {
  console.log("ModalContacts ~ props ==> ", props);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default ModalContacts;

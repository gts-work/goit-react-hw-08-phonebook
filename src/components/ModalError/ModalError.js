import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalError = ({ msg }) => {
  const [show, setShow] = useState(true);
  console.log("ModalError ~ show ==>>  ", show);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalError;

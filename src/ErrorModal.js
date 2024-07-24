import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ErrorModal(props) {
  // states
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("");
  // modal text description
  const invalidNum = "Please chose the number of guests that are attending.";
  const invalidName =
    "Please enter a name into the input box. Must contain only letters.";
  const invalidAssign =
    "Guest list is empty. Please add each of your guests' names into the second section. You can't assign dishes if you have no guests to assign them to!";
  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
    if (props.section === "invited") setModalText(invalidNum);
    if (props.section === "assign") setModalText(invalidAssign);
    if (props.section === "names") setModalText(invalidName);
  }

  return (
    <>
      <Button onClick={handleShow}>{props.innerText}</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;

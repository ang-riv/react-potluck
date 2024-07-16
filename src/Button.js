import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const div = props.invitedRef;
  const input = props.inputRef;
  //const test = console.log("At zero!");

  // if the number of guests is zero
  if (props.num === 0) {
    return (
      <>
        <Button onClick={handleShow}>Submit Guests</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Invalid Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please chose the number of guests that are attending.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return (
      <Button variant="warning" onClick={props.handleHide}>
        Submit Guests
      </Button>
    );
  }
}
export default MyButton;

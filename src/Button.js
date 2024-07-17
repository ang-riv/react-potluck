import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // innertext of the btns
  const innerText = props.innerText;

  // guest number  section
  if (props.section === "invited") {
    if (props.num === 0) {
      return (
        <>
          <Button onClick={handleShow}>{innerText}</Button>
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
        <Button variant="primary" onClick={props.onClick}>
          {innerText}
        </Button>
      );
    }
  } else if (props.section === "names") {
    // guest names sections
    return (
      <>
        <Button variant="primary" onClick={props.onClick}>
          {innerText}
        </Button>
      </>
    );
  } else if (props.section === "assign") {
    return <></>;
  }
}
export default MyButton;

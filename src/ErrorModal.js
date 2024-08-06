import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function ErrorModal(props) {
  // states
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const [btnStyles, setBtnStyles] = useState("");

  // when the error modal is rendered, change the style of the btns
  useEffect(() => {
    if (props.section === "invited") {
      setBtnStyles("mt-3 px-4 py-2 button-styles");
    }
    if (props.section === "names") {
      setBtnStyles("p-2 button-styles");
    }
  });

  // modal text description
  const invalidNum = "Please chose the number of guests that are attending.";
  const invalidName =
    "Please enter a name into the input box. Must contain only letters.";
  const invalidAssign =
    "Guest list is empty. Please add each of your guests' names into the second section. You can't assign dishes if you have no guests to assign them to!";

  // methods
  const handleClose = (e) => {
    setShow(false);
    e.preventDefault();
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
    if (props.section === "invited") setModalText(invalidNum);
    if (props.section === "assign") setModalText(invalidAssign);
    if (props.section === "names") setModalText(invalidName);
  };

  // uses bootstrap's styling and changes based on what section the btn is in
  return (
    <>
      <button className={btnStyles} onClick={handleShow}>
        {props.innerText}
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <button className="px-2 py-1 button-styles" onClick={handleClose}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;

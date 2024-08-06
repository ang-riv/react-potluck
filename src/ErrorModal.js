import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function ErrorModal(props) {
  // states
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("");
  const [btnStyles, setBtnStyles] = useState("");

  // when the error modal is rendered, change the style of the btns and set text
  useEffect(() => {
    if (props.section === "invited") {
      setBtnStyles("mt-3 px-4 py-2 button-styles");
      setModalText(invalidNum);
    }
    if (props.section === "names") {
      setBtnStyles("p-2 button-styles");
      setModalText(invalidName);
    }
    if (props.section === "assign") {
      setBtnStyles("mt-2 mb-3 px-5 py-2 button-styles");
      setModalText(invalidAssign);
    }
  }, [props.section, setBtnStyles, setModalText]);

  // modal text description
  const invalidNum = "Please chose the number of guests that are attending.";
  const invalidName =
    "Please enter a name into the input box. Must contain only letters.";
  const invalidAssign =
    "Guest list is empty. Please add each of your guests' names into the second section. You can't assign dishes if you have no guests to assign them to!";

  // methods
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

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

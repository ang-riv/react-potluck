import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const test = console.log("At zero!");

  // event handler for when the button is pressed
  // if the number of guests is zero
  if (props.num === 0) {
    return (
      <>
        <Button onClick={handleShow}>Submit Guests</Button>
        {test}
      </>
    );
  } else {
    return <Button variant="warning">Submit Guests</Button>;
  }
}

export default MyButton;

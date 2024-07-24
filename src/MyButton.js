// named MyButton to prevent conflicts with bootstrap's button
import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import ErrorModal from "./ErrorModal";

function MyButton(props) {
  // innertext of the btns
  const innerText = props.innerText;

  // for the guest name section to test if their entry is just letters, spaces, and hyphens for hyphenated names
  const lettersOnly = /^[a-zA-Z\s-]*$/.test(props.name);

  // guest number  section
  if (props.section === "invited") {
    if (props.num === 0) {
      return <ErrorModal innerText={innerText} section={props.section} />;
    } else {
      return (
        <Button variant="primary" onClick={props.onClick}>
          {innerText}
        </Button>
      );
    }
  } else if (props.section === "names") {
    // guest names sections
    // if individualguestname is nothing then do the modal again like above, then if not then do the regular onClick stuff
    if (props.name === "" || !lettersOnly) {
      return <ErrorModal innerText={innerText} section={props.names} />;
    } else {
      return (
        <>
          <Button variant="primary" onClick={props.onClick}>
            {innerText}
          </Button>
        </>
      );
    }
  } else {
    return (
      <>
        <Button variant="primary" onClick={props.onClick}>
          {innerText}
        </Button>
      </>
    );
  }
}
export default MyButton;

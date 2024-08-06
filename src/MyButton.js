// named MyButton to prevent conflicts with bootstrap's button
import React from "react";
import ErrorModal from "./ErrorModal";

function MyButton(props) {
  // innertext of the btns
  const innerText = props.innerText;

  // for the guest name section to test if their entry is just letters, spaces, and hyphens for hyphenated names
  const lettersOnly = /^[a-zA-Z\s-]*$/.test(props.name);

  // guest number section
  if (props.section === "invited") {
    if (props.num === 0) {
      return <ErrorModal innerText={innerText} section={props.section} />;
    } else {
      return (
        <button
          className="mt-3 px-4 py-2 button-styles"
          onClick={props.onClick}
        >
          {innerText}
        </button>
      );
    }
  } else if (props.section === "names") {
    // guest names section
    // if individualguestname is nothing then do the modal again like above, if not then do the regular onClick stuff
    if (props.name === "" || !lettersOnly) {
      return <ErrorModal innerText={innerText} section={props.section} />;
    } else {
      return (
        <>
          <button className="p-2 button-styles" onClick={props.onClick}>
            {innerText}
          </button>
        </>
      );
    }
  } else if (props.section === "assign") {
    // assign dishes section
    // if the guestlist is empty then return the modal
    if (props.guestList.length === 0) {
      return <ErrorModal innerText={innerText} section={props.section} />;
    } else {
      return (
        <>
          <button
            className="mt-2 mb-3 px-5 py-2 button-styles"
            onClick={props.onClick}
          >
            {innerText}
          </button>
        </>
      );
    }
  }
}
export default MyButton;

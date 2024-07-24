import React from "react";
import MyButton from "./MyButton.js";

function GuestNames(props) {
  return (
    <div ref={props.div}>
      <h3>Enter each name of your guests: </h3>
      <input
        ref={props.inputRef}
        type="text"
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      ></input>
      <br />
      <MyButton
        section="names"
        innerText="Submit Name"
        onClick={props.onClick}
        name={props.name}
      />
    </div>
  );
}

export default GuestNames;

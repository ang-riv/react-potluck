import React from "react";
import MyButton from "./Button.js";

function GuestNames(props) {
  return (
    <div ref={props.div}>
      <h3>Enter each name of your guests: </h3>
      <input ref={props.inputRef} type="text" onChange={props.onChange}></input>
      <br />
      {/* figure out why it's not working, works with the other button*/}
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

import React from "react";

function GuestNames(props) {
  return (
    <div ref={props.div}>
      <h3>Enter each name of your guests: </h3>
      <input ref={props.inputRef} type="text" onChange={props.onChange}></input>
      <br />
      <input
        id="guest"
        type="button"
        value="Submit Name"
        onClick={props.onClick}
      ></input>
    </div>
  );
}

export default GuestNames;

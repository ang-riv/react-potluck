import React from "react";

function GuestNumber(props) {
  return (
    <div ref={props.div}>
      <h3>How many people are you inviting?</h3>
      {/* dropdown menu*/}
      {/* try to add in a conditional so that while show is true, show these elements. When the button is pressed then hide these elements and put in a thumbs up in it's place*/}
      <h4 style={{ display: "none" }}>👍</h4>
      <p ref={props.errorMessage} style={{ display: "none", color: "red" }}>
        Please select a number
      </p>
      <select onChange={props.onChange}>
        {/* use loop to make an option in components*/}
        <option value="0">Select number:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        onClick={props.onClick}
        type="button"
        value="Submit Guests"
      ></input>
    </div>
  );
}

export default GuestNumber;

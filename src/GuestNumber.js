import React from "react";
import MyButton from "./Button.js";
function GuestNumber(props) {
  const dropDownStyle = {
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: "0.375rem",
    marginRight: "5px",
  };
  // use an array with map to generate the number options
  const nums = [...Array(20)].map((_, i) => i + 1);
  const options = nums.map((i) => (
    <option key={i} value={i}>
      {i}
    </option>
  ));
  return (
    <div ref={props.div}>
      <h3>How many people are you inviting?</h3>
      <select onChange={props.onChange} style={dropDownStyle}>
        {/* use loop to make an option in components*/}
        <option value="0">Select number:</option>
        {options}
      </select>
      {/* section invited indicates where the button is being used */}
      <MyButton
        num={props.num}
        onClick={props.onClick}
        innerText="Submit Guests"
        section="invited"
      />
    </div>
  );
}

export default GuestNumber;

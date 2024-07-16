import React from "react";

function GuestNumber(props) {
  // use an array with map to generate the number options
  const nums = [...Array(20)].map((_, i) => i + 1);
  const options = nums.map((i) => <option value={i}>{i}</option>);
  return (
    <div ref={props.div}>
      <h3>How many people are you inviting?</h3>
      <p ref={props.errorMessage} style={{ display: "none", color: "red" }}>
        Please select a number
      </p>
      <select onChange={props.onChange}>
        {/* use loop to make an option in components*/}
        <option value="0">Select number:</option>
        {options}
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

import React from "react";
import MyButton from "./Button.js";
function GuestNumber(props) {
  // use an array with map to generate the number options
  const nums = [...Array(20)].map((_, i) => i + 1);
  const options = nums.map((i) => <option value={i}>{i}</option>);
  return (
    <div ref={props.div}>
      <h3>How many people are you inviting?</h3>
      <select onChange={props.onChange}>
        {/* use loop to make an option in components*/}
        <option value="0">Select number:</option>
        {options}
      </select>
      {/* new button component here */}
      <MyButton num={props.num} onClick={props.onClick} />
    </div>
  );
}

export default GuestNumber;

import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  // number of guests that we will base our array on
  const [numOfGuests, setNumOfGuests] = useState();
  // initialize state to an empty array where we will put the guest names in the second UI, then once full, have a assign dishes btn
  const [guestList, setGuestList] = useState();

  // methods
  // allows the text input box to update with the user's input
  function updateName(e) {
    let userInput = e.target.value;
    setNumOfGuests(userInput);
  }

  function guestNum(e) {
    let guestNum = e.target.value;
    setNumOfGuests(guestNum);
    console.log(numOfGuests);
  }

  // take in the number of guests and create an array with that number
  function handleClick(e) {
    e.preventDefault();
    //setGuestList(Array(numOfGuests).fill(null));
    console.log(numOfGuests);
  }

  // make function that generates the dropdown menu options with a loop

  return (
    <div className="App">
      <h1>Potluck Guest List</h1>
      <h2>
        Having a potluck but guests don't know what to bring? <br />
        With this generator, guests will be assigned a random dish to bring!
      </h2>
      <h3>How many people are you inviting?</h3>
      <form>
        {/* dropdown menu*/}
        {/* tester */}
        <input type="text" onChange={updateName}></input>
        <select onChange={guestNum}>
          <option value="">Select number:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input
          type="submit"
          value="Submit Guests"
          onClick={handleClick}
        ></input>
        {/* number of guests added to the array*/}
        {/*<h4>Attending: 0</h4>*/}
        {/*show what the array looks like*/}
      </form>
    </div>
  );
}

export default App;

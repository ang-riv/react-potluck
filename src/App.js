import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  // number of guests that we will base our array on
  const [numOfGuests, setNumOfGuests] = useState();
  // initialize state to an empty array where we will put the guest names in the second UI, then once full, have a assign dishes btn
  const [guestList, setGuestList] = useState([]);

  // methods
  // allows the text input box to update with the user's input
  function updateName(e) {
    setNumOfGuests(e.target.value);
  }

  return (
    <div className="App">
      <h1>Potluck Guest List</h1>
      <h2>
        Having a potluck but guests don't know what to bring? <br />
        With this generator, guests will be assigned a random dish to bring!
      </h2>
      <h3>How many people are you inviting?</h3>
      <form>
        <input
          type="text"
          placeholder="Add number of guest's here..."
          value={numOfGuests}
          onChange={updateName}
        ></input>
        <input type="submit" value="Add Guest"></input>
        {/* number of guests added to the array*/}
        {/*<h4>Attending: 0</h4>*/}
      </form>
    </div>
  );
}

export default App;

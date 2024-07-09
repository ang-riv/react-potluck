import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  // initialize state to an empty array where we will put the guest names
  const [guestList, setGuestList] = useState([]);

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
          value=""
          onChange=""
        ></input>
        <input type="submit" value="Add Guest"></input>
        {/* number of guests added to the array*/}
        {/*<h4>Attending: 0</h4>*/}
      </form>
    </div>
  );
}

export default App;

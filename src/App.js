import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  // number of guests
  const [numOfGuests, setNumOfGuests] = useState();

  // initialize state to an empty array where we will put the guest names in the second UI, then once full, have a assign dishes btn
  const [guestList, setGuestList] = useState([]);
  const [individualGuestName, setIndividualGuestName] = useState("");
  // this array will hold all of the names of the guests!
  const [guestsNamesList, setGuestsNamesList] = useState([]);

  // *** methods
  // allows the text input box to update with the user's input
  function updateName(e) {
    let userInput = e.target.value;
    setIndividualGuestName(userInput);
    e.preventDefault();
  }

  // take in the number of guests and create an array with that number!
  function guestNum(e) {
    setNumOfGuests(Number(e.target.value));
    setGuestList(Array(Number(e.target.value)).fill(null));
  }

  // just console logs for now
  function handleClick(e) {
    document.querySelector("#name").value = "";
    e.preventDefault();
    // number of guests
    console.log(numOfGuests + "testing!");
    // other filled with null array
    //console.log(guestList);
    // show the array
    console.log(individualGuestName);
    // guest list array
    console.log(guestsNamesList);
    console.log(guestsNamesList.length);

    // if the amount of people they are inputting into the array is less than the amount of people they said were going, then add them to the array
    if (guestsNamesList.length < numOfGuests) {
      // make a copy of that array then add the name to the array
      const newArr = [individualGuestName, ...guestsNamesList];

      // return? or set the new state to be this new array
      setGuestsNamesList(newArr);
    } else if (guestsNamesList.length === numOfGuests) {
      // if it is exactly that number then hide the button
      // maybe return?
      console.log("Max limit");
    }
  }

  // create a function that pushes names into an array of the guests names, make sure to keep going until they reached the number of guests they wanted
  // show Guest List full! when they do, and another button that says assign dishes
  // make function that generates the dropdown menu options with a loop

  return (
    <div className="App">
      <h1>Potluck Guest List</h1>
      <h2>
        Having a potluck but guests don't know what to bring? <br />
        Assign them a random dish to bring!
      </h2>
      <h3>How many people are you inviting?</h3>
      <form>
        {/* dropdown menu*/}
        {/* try to add in a conditional so that while show is true, show these elements. When the button is pressed then hide these elements and put in a thumbs up in it's place*/}
        <h4 style={{ display: "none" }}>👍</h4>
        <select onChange={guestNum}>
          <option value="">Select number:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="button" value="Submit Guests"></input>
        <h4>Enter each name of your guests: </h4>
        <input id="name" type="text" onChange={updateName}></input>
        <br />
        <input type="button" value="Submit Name" onClick={handleClick}></input>
        {/* number of guests added to the array*/}
        <h4>Attending: {numOfGuests}</h4>
        <p>Guest Names: {guestsNamesList}</p>
        {/*show what the array looks like*/}
      </form>
    </div>
  );
}

export default App;

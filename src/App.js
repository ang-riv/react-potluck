import "./App.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Header from "./Header.js";
import GuestNumber from "./GuestNumber.js";
import GuestNames from "./GuestNames.js";
import AssignDishes from "./AssignDishes.js";

function App() {
  //** states
  // number of guests
  const [numOfGuests, setNumOfGuests] = useState(0);
  // array of guest's names
  const [guestList, setGuestList] = useState([]);
  // display the names nicer
  const namesList = guestList.join(", ");
  // single guest's name
  const [individualGuestName, setIndividualGuestName] = useState("");
  // foods that will eventually be replaced with an API
  const [recipes, setRecipes] = useState([
    "Pinwheels",
    "Mashed Potatoes",
    "Sliders",
    "Pasta Salad",
  ]);

  //** refs
  // using refs to hide whole divs/sections
  const guestNameInputRef = useRef(null);
  const invitedRef = useRef(null);
  const assignedDishesRef = useRef(null);
  // unordered list that will hold guest names and the dishes that they have been assigned, will be changed later maybe
  const listRef = useRef(null);
  const numErrorRef = useRef(null);
  const inputRef = useRef(null);

  //** methods
  // allows the text input box to update with the user's input
  function updateName(e) {
    let userInput = e.target.value;
    setIndividualGuestName(userInput);
    e.preventDefault();
  }

  // take in the number of guests and create an array with that number
  function guestNum(e) {
    setNumOfGuests(Number(e.target.value));
  }

  function handleHideBtn() {
    // make sure user made a selection
    // TODO: change to toast?
    if (numOfGuests === 0) {
      if (numErrorRef.current) {
        numErrorRef.current.style.display = "block";
      }
    } else {
      if (invitedRef.current) {
        invitedRef.current.style.display = "none";
      }
    }
  }

  // adds names to the guestList array
  function handleClick() {
    // empty the input box after each name is entered
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // test console.logs
    // number of guests
    console.log(guestList.length + "testing!");
    /*
    // other filled with null array
    //console.log(guestList);
    // show the array
    console.log(individualGuestName);
    // guest list array
    console.log(guestList);
    console.log(guestList.length);
    */

    const hideBtn = numOfGuests - 1;

    // if the amount of people they are inputting into the array is less than the amount of people they said were going, then add them to the array
    if (guestList.length < numOfGuests) {
      // make sure that what is added to the array is a name/ letters only
      const lettersOnly = /^[a-zA-Z\s-]*$/.test(individualGuestName);

      // TODO: error message for if the input is empty or if they input a number of letters
      if (individualGuestName === "") {
        console.log("Empty name");
      } else if (!lettersOnly) {
        // if anything other than letters are inputted
        console.log("Not letters");
      } else {
        // make a copy of that array then add the name to the beginning
        const newArr = [...guestList, individualGuestName];

        setGuestList(newArr);
      }

      // hide the button after the last person is added to the array
      if (guestList.length === hideBtn) {
        if (guestNameInputRef.current) {
          guestNameInputRef.current.style.display = "none";
        }
      }
    }
  } // end of handleClick

  // assigns dishes to the guests randomly
  function handleDishes() {
    for (const guest of guestList) {
      // pick a random food from the recipe array
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];

      // create a list item for each guest and what they'll bring
      // TODO replace with a component later
      let listItem = document.createElement("li");
      listItem.innerText = `${guest} is bringing ${randomRecipe}.`;
      listRef.current.append(listItem);
      recipes.splice(randomIndex, 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <form>
        <GuestNumber
          div={invitedRef}
          errorMessage={numErrorRef}
          onChange={guestNum}
          onClick={handleHideBtn}
        />
        <h3>Attending: {numOfGuests}</h3>
        <GuestNames
          div={guestNameInputRef}
          inputRef={inputRef}
          onChange={updateName}
          onClick={handleClick}
          namesList={namesList}
        />
        <h3>Sending invites to:</h3>
        <h4 style={{ fontWeight: "normal" }}>{namesList}</h4>
        <AssignDishes
          div={assignedDishesRef}
          ul={listRef}
          onClick={handleDishes}
        />
      </form>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { useRef } from "react";
// stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// components
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
  // foods that will eventually be replaced with an API (doesn't need to be a state)
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
  // individual elements
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
  const guestNum = (e) => setNumOfGuests(Number(e.target.value));

  const handleHideBtn = () => {
    // make sure user made a selection
    invitedRef.current.style.display = "none";
    // focus on the input box after btn is clicked
    inputRef.current.focus();
  };

  // adds names to the guestList array
  const handleClick = () => {
    // empty the input box after each name is entered + focus input box
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }

    const hideBtn = numOfGuests - 1;

    // if the amount of people they are inputting into the array is less than the amount of people they said were going, then add them to the array
    if (guestList.length < numOfGuests) {
      // make a copy of that array then add the name to the beginning
      const newArr = [...guestList, individualGuestName];

      setGuestList(newArr);

      // hide the button after the last person is added to the array
      if (guestList.length === hideBtn) {
        if (guestNameInputRef.current) {
          guestNameInputRef.current.style.display = "none";
        }
      }
    }
  };

  // assigns dishes to the guests randomly
  const handleDishes = () => {
    for (const guest of guestList) {
      // pick a random food from the recipe array
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];

      // create a list item for each guest and what they'll bring
      // find an alternative to this
      let listItem = document.createElement("li");
      listItem.innerText = `${guest} is bringing ${randomRecipe}.`;
      listRef.current.append(listItem);
      // remove the selected recipe from the array
      recipes.splice(randomIndex, 1);
    }
  };

  // spread attributes for props
  const guestNumberProps = {
    div: invitedRef,
    errorMessage: numErrorRef,
    onChange: guestNum,
    onClick: handleHideBtn,
    num: numOfGuests,
  };
  const guestNamesProps = {
    div: guestNameInputRef,
    inputRef: inputRef,
    onChange: updateName,
    onClick: handleClick,
    namesList: namesList,
    name: individualGuestName,
  };
  const assignedDishesProps = {
    div: assignedDishesRef,
    ul: listRef,
    onClick: handleDishes,
  };
  return (
    <div className="App">
      <Header />
      <form>
        <GuestNumber {...guestNumberProps} />
        <h3>Attending: {numOfGuests}</h3>
        <GuestNames {...guestNamesProps} />
        <h3>Sending invites to:</h3>
        <h4 style={{ fontWeight: "normal" }}>{namesList}</h4>
        <AssignDishes {...assignedDishesProps} />
      </form>
    </div>
  );
}

export default App;

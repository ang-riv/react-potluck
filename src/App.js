import "./App.css";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

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
      const randomRecipe = recipes[randomIndex].trim();

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
      <header>
        <h1>Potluck Guest List</h1>
        <h2>
          Having a potluck but guests don't know what to bring? <br />
          Assign them a random dish to bring!
        </h2>
      </header>
      <form>
        <div ref={invitedRef}>
          <h3>How many people are you inviting?</h3>
          {/* dropdown menu*/}
          {/* try to add in a conditional so that while show is true, show these elements. When the button is pressed then hide these elements and put in a thumbs up in it's place*/}
          <h4 style={{ display: "none" }}>👍</h4>
          <p ref={numErrorRef} style={{ display: "none", color: "red" }}>
            Please select a number
          </p>
          <select onChange={guestNum}>
            {/* use loop to make an option in components*/}
            <option value="0">Select number:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            onClick={handleHideBtn}
            type="button"
            value="Submit Guests"
          ></input>
        </div>
        <h3>Attending: {numOfGuests}</h3>
        <h3>Enter each name of your guests: </h3>
        <div ref={guestNameInputRef}>
          <input ref={inputRef} type="text" onChange={updateName}></input>
          <br />
          <input
            id="guest"
            type="button"
            value="Submit Name"
            onClick={handleClick}
          ></input>
          {/* move these as they will disappear after the last name is written. Maybe use a confirmation? or like an edit thing eventually?*/}
          <h4>Sending invites to:</h4>
          <h4 style={{ fontWeight: "normal" }}>{namesList}</h4>
        </div>
        <div ref={assignedDishesRef}>
          <h4>GuestList Array's Length: {guestList.length}</h4>
          <h4>Everyone is bringing...</h4>
          <ul ref={listRef}></ul>
          <input
            type="button"
            value="Assign Dishes"
            onClick={handleDishes}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default App;

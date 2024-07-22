import React, { useEffect } from "react";
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
  // for displaying the dishes in a list
  const [dishes, setDishes] = useState([]);
  // for if the dishes have already been assigned
  const [assigned, setAssigned] = useState(false);
  // holds data pulled from recipe api
  const [recipeTitles, setRecipeTitles] = useState([]);
  // toggle for calling the api when a btn is pressed
  const [guestNumsSubmitted, setGuestNumsSubmitted] = useState(false);
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  //** api
  useEffect(() => {
    // if the number of guests has been submitted (the btn has been pressed), then call the api
    if (guestNumsSubmitted === true) {
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${numOfGuests}`
        );
        const data = await response.json();
        console.log(data);
        // turn into an array of just the titles
        let result = data.map((element) => element.title);
        console.log(result);
        setRecipeTitles(result);
      };
      fetchRecipes();
    }
  }, [guestNumsSubmitted === true]);

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
  const updateName = (e) => {
    let userInput = e.target.value;
    setIndividualGuestName(userInput);
    e.preventDefault();
  };

  // take in the number of guests and create an array with that number
  const guestNum = (e) => setNumOfGuests(Number(e.target.value));

  // hide divs
  //TODO: rename function
  const handleHideBtn = () => {
    // make sure user made a selection
    invitedRef.current.style.display = "none";
    // focus on the input box after btn is clicked
    inputRef.current.focus();

    //testing
    setGuestNumsSubmitted(!guestNumsSubmitted);
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
    // make copy of array
    const updatedRecipes = [...recipeTitles];
    // map over the guest list and assign a random recipe to each person on the list
    const newDishes = guestList.map((guest) => {
      const randomIndex = Math.floor(Math.random() * updatedRecipes.length);
      const randomRecipe = updatedRecipes[randomIndex];

      // remove that recipe from the list
      updatedRecipes.splice(randomIndex, 1);
      return { guest, recipe: randomRecipe };
    });

    setDishes(newDishes);
    setAssigned(true);
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
    dishes: dishes,
    assigned: assigned,
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

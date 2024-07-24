import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import confetti from "canvas-confetti";
// stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// components
import Header from "./Header.js";
import GuestNumber from "./GuestNumber.js";
import GuestNames from "./GuestNames.js";
import AssignDishes from "./AssignDishes.js";
import MyButton from "./MyButton.js";
import Button from "react-bootstrap/Button";

function App() {
  //****  states ****/
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
  const [recipes, setRecipes] = useState([]);
  // toggle for calling the api when a btn is pressed/the number of guests have been submitted
  const [numSubmitted, setnumSubmitted] = useState(false);
  // resetting everything for when the form is submitted
  const [tryAgain, setTryAgain] = useState(false);

  //** api key
  const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

  //****  api ****/
  useEffect(() => {
    // if the number of guests has been submitted (the btn has been pressed), then call the api
    if (numSubmitted === true) {
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=${numOfGuests}&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        // turn into an array of just the recipe titles
        let result = data.recipes.map((element) => element.title);
        console.log(result);
        setRecipes(result);
      };
      fetchRecipes();
    }
  }, [apiKey, numOfGuests, numSubmitted]);

  //****  refs ****/
  // using refs to hide whole divs/sections
  const guestNameInputRef = useRef(null);
  const invitedRef = useRef(null);
  const assignDishesRef = useRef(null);
  // individual elements
  const listRef = useRef(null);
  const inputRef = useRef(null);

  //****  methods ****/

  //** invited section/ guest number
  // for dropdown menu, takes in the number of guests and creates an array with that number
  const handleChange = (e) => setNumOfGuests(Number(e.target.value));

  // hide divs + check
  const handleGuestNum = () => {
    // make sure user made a selection
    invitedRef.current.style.display = "none";
    // focus on the input box after btn is clicked
    inputRef.current.focus();

    // checks if the guest nums have been entered/this btn was clicked to trigger the api call
    setnumSubmitted(!numSubmitted);
  };

  //** names section/ guest names
  // allows the text input box to update with the user's input
  const updateName = (e) => {
    let userInput = e.target.value;
    setIndividualGuestName(userInput);
    e.preventDefault();
  };

  // prevent the user from submitting names with enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current.focus();
    }
  };

  // adds names to the guestList array
  const handleGuestNames = (e) => {
    e.preventDefault();
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

  //** assign section/ assign dishes
  // assigns dishes/recipes to the guests randomly
  const handleDishes = () => {
    // make copy of array
    const updatedRecipes = [...recipes];
    // map over the guest list and assign a random recipe to each person on the list
    const newDishes = guestList.map((guest) => {
      const randomIndex = Math.floor(Math.random() * updatedRecipes.length);
      const randomRecipe = updatedRecipes[randomIndex];

      // remove that recipe from the list
      updatedRecipes.splice(randomIndex, 1);
      return { guest, recipe: randomRecipe };
    });

    // new states
    setDishes(newDishes);
    setAssigned(true);

    // some fun confetti
    confetti({ spread: 180 });
  };

  //** resetting the form with submit
  // tests to see what state everything is in during the try again method
  const handleSubmit = () => {
    setTryAgain(!tryAgain);
  };

  //** component props
  const guestNumberProps = {
    div: invitedRef,
    onChange: handleChange,
    onClick: handleGuestNum,
    num: numOfGuests,
  };

  const guestNamesProps = {
    div: guestNameInputRef,
    inputRef: inputRef,
    onChange: updateName,
    onClick: handleGuestNames,
    namesList: namesList,
    name: individualGuestName,
    onKeyDown: handleKeyDown,
  };

  const assignDishesProps = {
    div: assignDishesRef,
    ul: listRef,
    dishes: dishes,
    assigned: assigned,
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <GuestNumber {...guestNumberProps} />
        <h3>Attending: {numOfGuests}</h3>
        <GuestNames {...guestNamesProps} />
        <h3>Sending invites to:</h3>
        <h4 style={{ fontWeight: "normal" }}>{namesList}</h4>
        <AssignDishes {...assignDishesProps} />
        {/* assign dishes/try again button */}
        {assigned === false ? (
          <MyButton
            innerText="Assign Dishes"
            onClick={handleDishes}
            section="assign"
            guestList={guestList.length}
          />
        ) : (
          <>
            <h5>Have a great potluck!</h5>
            <Button type="submit">Try Again</Button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;

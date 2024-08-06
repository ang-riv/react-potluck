import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
// stylesheets
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import StartPage from "./StartPage.js";
import GuestNumPage from "./GuestNumPage.js";
import GuestListPage from "./GuestListPage.js";
import AssignPage from "./AssignPage.js";
import Container from "react-bootstrap/Container";
import confetti from "canvas-confetti";

function App() {
  //*** testing to prevent using api too much, uses test recipe array instead ***/
  const test = false;

  //***  page change states ***/
  const [startPage, setStartPage] = useState(true);
  const [numPage, setNumPage] = useState(false);
  const [listPage, setListPage] = useState(false);
  const [assignPage, setAssignPage] = useState(false);
  const testRecipes = [
    {
      title: "Tacos",
      description: "Yummy.",
      url: "https://feelgoodfoodie.net/recipe/ground-beef-tacos-napa-cabbage-guacamole/",
      image:
        "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",
    },
    {
      title: "Sandwiches",
      description: "Really yummy.",
      url: "https://www.allrecipes.com/crustless-grilled-cheese-recipe-8670392",
      image:
        "https://www.allrecipes.com/thmb/Wq4UodV4h31IlHig5sAac28VjOQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8670392_Crustless-Grilled-Cheese_TheDailyGourmet_4x3-35b478fb6a2a44abbcc2c1aba0348ae4.jpg",
    },
    { title: "Food item", description: "Super yummy.", image: "" },
    { title: "Another food item", description: "Very yummy.", image: "" },
    { title: "Yet Another food item", description: "So yummy.", image: "" },
  ];

  //****  states ****/
  // number of guests
  const [numOfGuests, setNumOfGuests] = useState(0);
  // array of guest's names
  const [guestList, setGuestList] = useState([]);

  // single guest's name
  const [individualGuestName, setIndividualGuestName] = useState("");
  // for displaying the dishes in a list
  const [dishes, setDishes] = useState([]);
  // holds data pulled from recipe api
  const [recipes, setRecipes] = useState([]);
  // toggle for calling the api when a btn is pressed/the number of guests have been submitted
  const [numSubmitted, setnumSubmitted] = useState(false);

  //** api key
  const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

  //****  api ****/
  useEffect(() => {
    // if the number of guests has been submitted (the btn has been pressed), then call the api
    if (numSubmitted === true && test === false) {
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=${numOfGuests}&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        // turn into an array of just the recipe titles
        let result = data.recipes.map((element) => ({
          title: element.title,
          sourceUrl: element.sourceUrl,
          image: element.image,
        }));
        console.log(result);
        setRecipes(result);
      };
      fetchRecipes();
    }
  }, [apiKey, numOfGuests, numSubmitted, test]);

  //****  refs ****/
  // text input box ref
  const inputRef = useRef(null);

  //****  methods ****/

  //*** start page change ***/
  const handleStartPage = () => {
    setStartPage(false);
    setNumPage(true);
  };

  //** invited section/ guest number
  // for dropdown menu, takes in the number of guests and creates an array with that number
  const handleDropdown = (e) => setNumOfGuests(Number(e.target.value));

  // hide divs + check
  const handleGuestNum = (e) => {
    e.preventDefault();

    // page change stuff
    setStartPage(false);
    setNumPage(false);
    setListPage(true);

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

  // allow user to remove a name that is was inputted into the array
  const removeName = (index) => {
    console.log("removed");
    setGuestList(guestList.filter((_, i) => i !== index));
    console.log(guestList);
  };

  // prevent the user from submitting names with enter
  // TODO: maybe make it do the same thing as the onClick method
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  // adds names to the guestList array
  const handleGuestNames = (e) => {
    e.preventDefault();
    // makes sure that after the name is submitted, if they click the btn again, the same name isn't submitted again (even if the input box looks empty, it's still there)
    setIndividualGuestName("");
    // empty the input box after each name is entered + focus input box
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }

    // if the amount of people they are inputting into the array is less than the amount of people they said were going, then add them to the array
    if (guestList.length < numOfGuests) {
      // make a copy of that array then add the name to the beginning
      const newArr = [...guestList, individualGuestName];
      setGuestList(newArr);
    }
  };

  //** assign section/ assign dishes
  // assigns dishes/recipes to the guests randomly
  const handleDishes = () => {
    // make copy of array
    let updatedRecipes = [];
    if (test === true) {
      updatedRecipes = [...testRecipes];
    } else if (test === false) {
      updatedRecipes = [...recipes];
    }
    //const updatedRecipes = [...testRecipes];
    // map over the guest list and assign a random recipe to each person on the list
    const newDishes = guestList.map((guest) => {
      const randomIndex = Math.floor(Math.random() * updatedRecipes.length);
      const randomRecipe = updatedRecipes[randomIndex];

      // remove that recipe from the list
      updatedRecipes.splice(randomIndex, 1);
      //  return an array of objects with guest's name and recipe information
      return {
        guest,
        title: randomRecipe.title,
        sourceUrl: randomRecipe.sourceUrl,
        image: randomRecipe.image,
      };
    });

    // new states/ page change
    setDishes(newDishes);
    console.log(dishes);

    setStartPage(false);
    setNumPage(false);
    setListPage(false);
    setAssignPage(true);

    // some fun confetti
    confetti({ spread: 180 });
  };

  //** resetting everything
  const handleTryAgain = () => {
    // empty everything
    setDishes([]);
    setRecipes([]);
    setGuestList([]);
    setIndividualGuestName("");
    setNumOfGuests(0);

    // page change
    setStartPage(true);
    setAssignPage(false);
    setnumSubmitted(!numSubmitted);
  };

  //** component props
  const guestNumProps = {
    onChange: handleDropdown,
    onClick: handleGuestNum,
    num: numOfGuests,
  };

  const guestNameProps = {
    inputRef: inputRef,
    onChange: updateName,
    onClick: handleGuestNames,
    onAssignClick: handleDishes,
    onKeyDown: handleKeyDown,
    removeName: removeName,
    guestList: guestList,
    numOfGuests: numOfGuests,
    name: individualGuestName,
  };

  return (
    <div className="App">
      <div className="border border-primary position-styles">
        {startPage && <StartPage onClick={handleStartPage} />}
        {numPage && <GuestNumPage {...guestNumProps} />}
        {listPage && <GuestListPage {...guestNameProps} />}
        {assignPage && (
          <Container className="d-flex align-items-center justify-content-center flex-column">
            <AssignPage dishes={dishes} />
            <button
              className="mt-4 py-2 px-4 button-styles"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;

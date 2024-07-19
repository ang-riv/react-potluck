import React from "react";

function DisplayDishes(props) {
  return (
    <>
      <li>
        {props.guestName} is bringing {props.randomRecipe}.
      </li>
    </>
  );
}

export default DisplayDishes;

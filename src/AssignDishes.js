import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import MyButton from "./Button";
import ConfettiExplosion from "react-confetti-explosion";
function AssignDishes(props) {
  // TODO: add a try again button and hide the assign dishes button after it is clicked, and add confetti
  return (
    <div ref={props.div}>
      {/*testing*/}
      <h4>Everyone is bringing...</h4>
      <ul ref={props.ul}>
        {props.dishes.map((dish, index) => (
          <li key={index}>
            {dish.guest} is bringing {dish.recipe}.
          </li>
        ))}
      </ul>
      {props.assigned === false ? (
        <MyButton innerText="Assign Dishes" onClick={props.onClick} />
      ) : (
        <MyButton innerText="Try Again?" />
      )}
    </div>
  );
}

export default AssignDishes;

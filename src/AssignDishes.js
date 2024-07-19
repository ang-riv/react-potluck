import React from "react";
import Button from "react-bootstrap/Button";
import MyButton from "./Button";
function AssignDishes(props) {
  // TODO: add a try again button and hide the assign dishes button after it is clicked
  return (
    <div ref={props.div}>
      {/*<h4>GuestList Array's Length: {props.guestList.length}</h4>*/}
      <h4>Everyone is bringing...</h4>
      <ul ref={props.ul}>
        {props.dishes.map((dish, index) => (
          <li key={index}>
            {dish.guest} is bringing {dish.recipe}.
          </li>
        ))}
      </ul>
      <MyButton innerText="Assign Dishes" onClick={props.onClick} />
    </div>
  );
}

export default AssignDishes;

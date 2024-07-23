import React from "react";
import Button from "react-bootstrap/Button";
import MyButton from "./Button";

function AssignDishes(props) {
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
        <>
          <Button>Try Again?</Button>
        </>
      )}
    </div>
  );
}

export default AssignDishes;

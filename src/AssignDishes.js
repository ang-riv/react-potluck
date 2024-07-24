import React from "react";

function AssignDishes(props) {
  return (
    <div ref={props.div}>
      <h4>Everyone is bringing...</h4>
      <ul ref={props.ul}>
        {props.dishes.map((dish, index) => (
          <li key={index}>
            {dish.guest} is bringing {dish.recipe}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignDishes;

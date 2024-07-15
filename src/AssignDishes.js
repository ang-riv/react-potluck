import React from "react";

function AssignDishes(props) {
  return (
    <div ref={props.div}>
      {/*<h4>GuestList Array's Length: {props.guestList.length}</h4>*/}
      <h4>Everyone is bringing...</h4>
      <ul ref={props.ul}></ul>
      <input
        type="button"
        value="Assign Dishes"
        onClick={props.onClick}
      ></input>
    </div>
  );
}

export default AssignDishes;

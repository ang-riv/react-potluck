import React from "react";
import Button from "react-bootstrap/Button";
function AssignDishes(props) {
  // TODO: add a try again button and hide the assign dishes button after it is clicked
  return (
    <div ref={props.div}>
      {/*<h4>GuestList Array's Length: {props.guestList.length}</h4>*/}
      <h4>Everyone is bringing...</h4>
      <ul ref={props.ul}></ul>
      <Button variant="primary" onClick={props.onClick}>
        Assign Dishes
      </Button>
    </div>
  );
}

export default AssignDishes;

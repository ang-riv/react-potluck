import React from "react";
import Container from "react-bootstrap/Container";
import DisplayRecipes from "./DisplayRecipes.js";

function AssignPage(props) {
  // method to make them
  return (
    <Container
      fluid
      className="recipe-container-breakpoint main-container-border py-3 rounded"
    >
      <h2 className="text-center mb-3">Everyone is bringing...</h2>
      <DisplayRecipes dishes={props.dishes} />
      <Container className="d-flex justify-content-center align-items-center mt-3">
        <h4>Have a great potluck!</h4>
      </Container>
    </Container>
  );
}

export default AssignPage;

import React from "react";
import Container from "react-bootstrap/Container";
import logo from "./images/appetizer.png";

function StartPage(props) {
  return (
    <Container
      fluid
      className="d-flex container-breakpoint align-items-center justify-content-center text-center flex-column main-container-border rounded py-4 mx-1"
    >
      <img
        src={logo}
        alt="food bowl logo"
        className="img-fluid my-3 logo-styles"
      ></img>
      <h1 className="main-title">Potluck Generator</h1>
      <p className="px-4 pt-2 mb-2">
        Having a potluck but guests don't know what to bring?
      </p>
      <p>Assign them a random dish!</p>
      <button className="px-5 py-2 button-styles" onClick={props.onClick}>
        Start
      </button>
    </Container>
  );
}

export default StartPage;

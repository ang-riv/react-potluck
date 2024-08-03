import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "react-bootstrap/Card";
import placeholder from "./images/placeholder.jpg";

// displays the names of the guests added in GuestListPage
export function displayNames(props) {
  const removeName = () => {
    console.log("Remove name");
  };

  const names = [...Array(props.num)].map((_, i) => i + 1);
  const nameBlocks = names.map((i) => (
    <Col xs={12} sm={6} key={i}>
      <Container className="d-flex p-2 mb-3 align-items-center justify-content-center border rounded">
        <p className="m-0 p-0">Name</p>
        <CloseButton className="ms-auto" onClick={removeName} />
      </Container>
    </Col>
  ));
  return (
    <div className="main-container-border scrollable-div names-div-height p-2 rounded">
      <Row>{nameBlocks}</Row>
    </div>
  );
}

// displays the assigned recipe cards in AssignDishes
export function displayRecipes() {
  const recipes = [...Array(8)].map((_, i) => i + 1);
  const recipeCards = recipes.map((i) => (
    <Col xs={12} md={6} lg={4} key={i}>
      <Card className="text-center m-2">
        <Card.Header>
          <span className="fw-bold">Name</span> is bringing:
        </Card.Header>
        <Card.Img className="border-bottom" variant="top" src={placeholder} />
        <Card.Body>
          <Card.Title>Recipe Name</Card.Title>
          <Card.Text>Recipe Description</Card.Text>
          <button className="px-3 py-1 button-styles">See Recipe</button>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div className="scrollable-div recipes-div-height">
      {/* add cols in the same way as DisplayNames*/}
      <Row>{recipeCards}</Row>
    </div>
  );
}
